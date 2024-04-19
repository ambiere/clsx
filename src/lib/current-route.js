import path from "path"
import { existsSync } from "fs"
import projectRootDir from "@ambiere/project-root"

export default class CurrentRoute {
  #root
  #_prepareStackTrace
  #prepareStackTrace
  #stack
  constructor() {
    this.#root = path.parse(projectRootDir()).base
    this.#_prepareStackTrace = Error.prepareStackTrace
    this.#prepareStackTrace = this.#_prepareStackTrace_
    this.#prepareStackTrace()
  }

  #_prepareStackTrace_() {
    try {
      Error.prepareStackTrace = function(_error, stack) {
        return stack.slice(2).map(callSite => ({
          route: callSite.getFileName()
        }))
      }
      this.#stack = Error().stack
    } finally {
      Error.prepareStackTrace = this.#_prepareStackTrace
    }
  }
  /**
   * Path to parent module
   * @returns {string | undefined}
   * */
  route(caller) {
    const route = this.#stack.find(stack => {
      caller = path.resolve(caller)
      if (existsSync(caller) && stack.route) {
        const _caller = caller.substring(caller.indexOf(this.#root))
        const _route = path.dirname(stack.route.substring(stack.route.indexOf(this.#root)))
        return _route.match(_caller)
      }
    })
    if (!route) return
    return route.route.substring(route.route.indexOf(this.#root))
  }
}

