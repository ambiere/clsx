import path from "path"
import { readFileSync } from "fs";
import toObject from "@ambiere/to-object"
import nextClsxConfigs from "./clsx-config.js";
import projectRootDir from "@ambiere/project-root"

export default class NextClsxStore {
  #rootDir
  #nextClsxConfigs

  constructor() {
    this.#nextClsxConfigs = nextClsxConfigs
    this.#rootDir = projectRootDir
  }

  prepareClsx() {
    return Object.assign({},
      this.#getRootClsx(),
      this.#getRouteRootClsx()
    )
  }

  processClsx(routeClsx) {
    const clsx = routeClsx.clsx
    const configs = routeClsx.configs

    if (configs.overrideRoot) return this.clsx = clsx
    if (configs.mergeWithRoot) {
      return Object.entries(clsx).map(([key, value]) => {
        const existingSelector = this.clsx[key]
        if (!existingSelector)
          return Object.defineProperty(this.clsx, key, {
            value,
            enumerable: true
          })
        Object.entries(value).map(([_key, _value]) => {
          const existingProperty = existingSelector[_key]
          if (!existingProperty)
            return Object.defineProperty(existingSelector, _key, {
              value: _value,
              enumerable: true
            })
          Object.defineProperty(existingSelector, _key, {
            value: `${existingProperty} ${_value}`,
            enumerable: true
          })
        })
      })
    }
    if (configs.replaceRoot === undefined || configs.replaceRoot) {
      Object.entries(clsx).map(([key, value]) => {
        return Object.defineProperty(this.clsx, key, {
          value,
          enumerable: true
        })
      })
    }
  }

  #readClsxSync(clsxPath) {
    try {
      const file = readFileSync(path.resolve(clsxPath), { encoding: "utf8" })
      return toObject(file)
    } catch (error) {
      console.error(error)
    }
  }

  #getRootClsx() {
    let clsx = {}
    const nextClsxConfigs = this.#nextClsxConfigs()
    if (nextClsxConfigs.root) {
      const clsxPath = path.join(nextClsxConfigs.root, "clsx.js")
      const _clsx = this.#readClsxSync(clsxPath)
      clsx["./"] = { clsx: _clsx }
      this.clsx = _clsx
    } else {
      try {
        const rootPath = this.#rootDir()
        const clsxPath = path.join(rootPath, "app/ui/style/clsx.js")
        const _clsx = this.#readClsxSync(clsxPath)
        clsx["./"] = { clsx: _clsx }
        this.clsx = _clsx
      } catch (_error) {
        this.clsx = {}
        clsx["./"] = { clsx: {} }
      }
    }
    return clsx
  }

  #getRouteRootClsx() {
    const clsx = {}
    const nextClsxConfigs = this.#nextClsxConfigs()
    const routeRootExist = nextClsxConfigs.routeRoot && nextClsxConfigs.routeRoot.length
    if (routeRootExist) {
      nextClsxConfigs.routeRoot.map(({
        root,
        route,
        overrideRoot,
        mergeWithRoot,
        replaceRoot }) => {
        const configs = {
          overrideRoot: overrideRoot ?? false,
          mergeWithRoot: mergeWithRoot ?? false,
          replaceRoot: replaceRoot ?? true
        }
        if (root) {
          const clsxPath = path.join(root, "clsx.js")
          clsx[route] = {
            clsx: this.#readClsxSync(path.resolve(clsxPath)),
            configs
          }
        } else {
          const clsxPath = path.join(route, "ui/style/clsx.js")
          clsx[route] = {
            clsx: this.#readClsxSync(path.resolve(clsxPath)),
            configs
          }
        }
      })
    }
    return clsx
  }
}
