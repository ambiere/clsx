import path from "path"
import { readFileSync } from "fs"
import toObject from "@ambiere/to-object"
import projectRootDir from "@ambiere/project-root"

/**
 * next-clsx configurations
 * @returns {{} | import("../types").NextClsxConfigs}
 * */
export default function nextClsxConfigs() {
  try {
    const rootDir = projectRootDir()
    if (rootDir) {
      const pathToConfigs = path.resolve(path.join(rootDir, "clsx.config.mjs"))
      let configs = readFileSync(pathToConfigs, "utf8")
      if (configs) return toObject(configs)
      return {}
    }
  } catch (error) {
    if (error.code === "ERR_MODULE_NOT_FOUND") {
      console.error("[Error]: next-clsx configurations file not found")
      return {}
    }
    console.log(error)
  }
}
