import { setupAptPack } from "../utils/setup/setupAptPack"
import { setupPacmanPack } from "../utils/setup/setupPacmanPack"
import { setupBrewPack } from "../utils/setup/setupBrewPack"
import { setupChocoPack } from "../utils/setup/setupChocoPack"
import { isArch } from "../utils/env/isArch"
import { hasDnf } from "../utils/env/hasDnf"
import { setupDnfPack } from "../utils/setup/setupDnfPack"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setupCcache(version: string, _setupDir: string, _arch: string) {
  switch (process.platform) {
    case "win32": {
      return setupChocoPack("ccache", version)
    }
    case "darwin": {
      return setupBrewPack("ccache", version)
    }
    case "linux": {
      if (isArch()) {
        return setupPacmanPack("ccache", version)
      } else if (hasDnf()) {
        return setupDnfPack("ccache", version)
      }
      return setupAptPack("ccache", version)
    }
    default: {
      throw new Error(`Unsupported platform`)
    }
  }
}
