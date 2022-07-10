import { setupAptPack } from "../utils/setup/setupAptPack"
import { setupPacmanPack } from "../utils/setup/setupPacmanPack"
import { setupBrewPack } from "../utils/setup/setupBrewPack"
import { setupChocoPack } from "../utils/setup/setupChocoPack"
import { isArch } from "../utils/env/isArch"
import { hasDnf } from "../utils/env/hasDnf"
import { setupDnfPack } from "../utils/setup/setupDnfPack"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setupSevenZip(version: string, _setupDir: string, _arch: string) {
  switch (process.platform) {
    case "win32": {
      return setupChocoPack("7zip", version)
    }
    case "darwin": {
      return setupBrewPack("p7zip", version)
    }
    case "linux": {
      if (isArch()) {
        return setupPacmanPack("p7zip", version)
      } else if (hasDnf()) {
        return setupDnfPack("p7zip", version)
      }
      return setupAptPack("p7zip-full", version)
    }
    default: {
      throw new Error(`Unsupported platform`)
    }
  }
}
