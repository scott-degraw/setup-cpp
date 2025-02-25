/* eslint-disable require-atomic-updates */
import { InstallationInfo } from "./setupBin"
import { execRootSync } from "admina"
import { info } from "@actions/core"
import ciDetect from "@npmcli/ci-detect"
import { addEnv, cpprc_path, setupCppInProfile } from "../env/addEnv"
import { appendFileSync, existsSync } from "fs"
import which from "which"

let didUpdate: boolean = false
let didInit: boolean = false

/** A function that installs a package using apt */
export async function setupAptPack(
  name: string,
  version?: string,
  repositories: string[] = [],
  update = false
): Promise<InstallationInfo> {
  const apt: string = getApt()

  info(`Installing ${name} ${version ?? ""} via ${apt}`)

  process.env.DEBIAN_FRONTEND = "noninteractive"

  if (!didUpdate || update) {
    updateRepos(apt)
    didUpdate = true
  }

  if (!didInit) {
    await initApt(apt)
    didInit = true
  }

  if (Array.isArray(repositories) && repositories.length !== 0) {
    for (const repo of repositories) {
      // eslint-disable-next-line no-await-in-loop
      execRootSync("add-apt-repository", ["--update", "-y", repo])
    }
    updateRepos(apt)
  }

  if (version !== undefined && version !== "") {
    try {
      execRootSync(apt, ["install", "--fix-broken", "-y", `${name}=${version}`])
    } catch {
      execRootSync(apt, ["install", "--fix-broken", "-y", `${name}-${version}`])
    }
  } else {
    execRootSync(apt, ["install", "--fix-broken", "-y", name])
  }

  return { binDir: "/usr/bin/" }
}

function getApt() {
  let apt: string
  if (which.sync("nala", { nothrow: true }) !== null) {
    apt = "nala"
  } else {
    apt = "apt-get"
  }
  return apt
}

function updateRepos(apt: string) {
  execRootSync(apt, apt !== "nala" ? ["update", "-y"] : ["update"])
}

/** Install apt utils and certificates (usually missing from docker containers) */
async function initApt(apt: string) {
  execRootSync(apt, [
    "install",
    "--fix-broken",
    "-y",
    "software-properties-common",
    "apt-utils",
    "ca-certificates",
    "gnupg",
  ])
  addAptKeyViaServer(["3B4FE6ACC0B21F32", "40976EAF437D05B5"], "setup-cpp-ubuntu-archive.gpg")
  addAptKeyViaServer(["1E9377A2BA9EF27F"], "launchpad-toolchain.gpg")
  if (apt === "nala") {
    // enable utf8 otherwise it fails because of the usage of ASCII encoding
    await addEnv("LANG", "C.UTF-8")
    await addEnv("LC_ALL", "C.UTF-8")
  }
}

function initGpg() {
  execRootSync("gpg", ["-k"])
}

export function addAptKeyViaServer(keys: string[], name: string, server = "keyserver.ubuntu.com") {
  const fileName = `/etc/apt/trusted.gpg.d/${name}`
  if (!existsSync(fileName)) {
    initGpg()
    for (const key of keys) {
      execRootSync("gpg", [
        "--no-default-keyring",
        "--keyring",
        `gnupg-ring:${fileName}`,
        "--keyserver",
        server,
        "--recv-keys",
        key,
      ])
      execRootSync("chmod", ["644", fileName])
    }
  }
  return fileName
}

export async function addAptKeyViaDownload(name: string, url: string) {
  const fileName = `/etc/apt/trusted.gpg.d/${name}`
  if (!existsSync(fileName)) {
    initGpg()
    await setupAptPack("curl", undefined)
    execRootSync("bash", ["-c", `curl -s ${url} | gpg --no-default-keyring --keyring gnupg-ring:${fileName} --import`])
    execRootSync("chmod", ["644", fileName])
  }
  return fileName
}

export function updateAptAlternatives(name: string, path: string) {
  if (ciDetect() === "github-actions") {
    return execRootSync("update-alternatives", ["--install", `/usr/bin/${name}`, name, path, "40"])
  } else {
    setupCppInProfile()
    return appendFileSync(
      cpprc_path,
      `\nif [ $UID -eq 0 ]; then update-alternatives --install /usr/bin/${name} ${name} ${path} 40; fi\n`
    )
  }
}
