import path from "path"
import projectRootDir from "@ambiere/project-root"

export default async function nextClsxConfig() {
  try {
    const rootDir = projectRootDir()
    if (rootDir) {
      const pathToConfigs = path.resolve(path.join(rootDir, "clsx.config.mjs"))
      const configs = await import(pathToConfigs)
      if (configs.default) return configs.default
    }
  } catch (error) {
    if (error.code === "ERR_MODULE_NOT_FOUND") {
      return {}
    }
    console.log(error)
    return {}
  }
}


