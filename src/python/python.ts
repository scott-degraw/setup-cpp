import { addPath } from "../utils/env/addEnv"
import { setupAptPack } from "../utils/setup/setupAptPack"
import { setupPacmanPack } from "../utils/setup/setupPacmanPack"
import { setupBrewPack } from "../utils/setup/setupBrewPack"
import { setupChocoPack } from "../utils/setup/setupChocoPack"
import ciDetect from "@npmcli/ci-detect"
import { warning, info } from "ci-log"
import { isArch } from "../utils/env/isArch"
import which from "which"
import { InstallationInfo } from "../utils/setup/setupBin"
import { dirname, join } from "patha"
import { hasDnf } from "../utils/env/hasDnf"
import { setupDnfPack } from "../utils/setup/setupDnfPack"
import { isUbuntu } from "../utils/env/isUbuntu"

export async function setupPython(version: string, setupDir: string, arch: string) {
  if (ciDetect() !== "github-actions") {
    // TODO parse version
    return setupPythonViaSystem(version, setupDir, arch)
  }
  try {
    info("Installing python in GitHub Actions")
    const { setupActionsPython } = await import("./actions_python")
    return setupActionsPython(version, setupDir, arch)
  } catch (err) {
    warning((err as Error).toString())
    return setupPythonViaSystem(version, setupDir, arch)
  }
}

export async function setupPythonViaSystem(
  version: string,
  setupDir: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _arch: string
): Promise<InstallationInfo> {
  switch (process.platform) {
    case "win32": {
      if (setupDir) {
        await setupChocoPack("python3", version, [`--params=/InstallDir:${setupDir}`])
      } else {
        await setupChocoPack("python3", version)
      }
      // Adding the bin dir to the path
      const pythonBinPath =
        which.sync("python3.exe", { nothrow: true }) ??
        which.sync("python.exe", { nothrow: true }) ??
        join(setupDir, "python.exe")
      const pythonSetupDir = dirname(pythonBinPath)
      /** The directory which the tool is installed to */
      await activateWinPython(pythonSetupDir)
      return { installDir: pythonSetupDir, binDir: pythonSetupDir }
    }
    case "darwin": {
      return setupBrewPack("python3", version)
    }
    case "linux": {
      let installInfo: InstallationInfo
      if (isArch()) {
        installInfo = setupPacmanPack("python", version)
        setupPacmanPack("python-pip")
      } else if (hasDnf()) {
        installInfo = setupDnfPack("python3", version)
        setupDnfPack("python3-pip")
      } else if (isUbuntu()) {
        installInfo = await setupAptPack("python3", version)
        await setupAptPack("python3-pip")
      } else {
        throw new Error(`Unsupported linux distributions`)
      }
      return installInfo
    }
    default: {
      throw new Error(`Unsupported platform`)
    }
  }
}

async function activateWinPython(binDir: string) {
  info(`Add ${binDir} to PATH`)
  await addPath(binDir)
}
