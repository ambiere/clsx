export interface StylesConfigs {
  /**
   * Override root global styles*/
  overrideRoot?: boolean,
  /**
   * Merge with the root global styles*/
  mergeWithRoot?: boolean,
  /**
   * Replace exiting styles in root global styles*/
  replaceRoot?: boolean
}

export interface RouteRoot extends StylesConfigs {
  /**
   * Route with root global styles */
  route: string,
  /**
   * Path to route global styles
   * Default: ../route/ui/styles*/
  root?: string,
}[]

export interface NextClsxConfigs {
  /**
   * Directory where `next-clsx` look for root global styles
   * Default: "./app/ui/style/"
   * */
  root?: Root,
  routeRoot?: RouteRoot
}

export type Clsx = {
  [index: string]: string | number | boolean | string[]
} | {}

export interface ClsxObject {
  [index: string]: Clsx
}

export interface GlobalClsx {
  clsx: Clsx,
  configs?: StylesConfigs
}

export interface GlobalClsxObject extends GlobalClsx {
  [index: string]: Clsx | StylesConfigs
}

export type Styles = {
  _configs_?: StylesConfigs,
  clsx: ClsxObject
} | ClsxObject


/**
 * Stores next-clsx global styles
 * @class
 * */
export class NextClsxStore {
  /**
   * Project root directory 
   * @returns {string | undefined} Directory
   * @private
   * */
  private rootDir: () => string | undefined
  /**
   * next-clsx configurations
   * @returns { NextClsxConfigs | {} } configs
   * @private
   * */
  private nextClsxConfigs: () => NextClsxConfigs | {}

  constructor()

  /**
   * Synchronously get all the next-clsx global styles
   * @returns { GlobalClsxObject | {} | undefined} clsx 
   * */
  prepareClsx(): GlobalClsx | {} | undefined

  /**
   * Update global styles based on route styles configurations
   * */
  processClsx(): void

  /**
   * Synchronously read global styles
   * @param {string} clsxPath
   * @returns { Styles | undefined}
   * */
  private readClsxSync(clsxPath: string): Styles | undefined

  /**
   * Synchronously get root global styles if defined
   * @returns { ClsxObject | undefined }
   * @private
   * */
  private getRootClsx(): ClsxObject | undefined

  /**
   * Synchronously get route global styles
   * @returns { GlobalClsx | {} }>}
   * @private
   * */
  private geRouteRootClsx(): GlobalClsx | {}
}

/**
 * Get next-clsx configurations
 * @returns { {} | NextClsxConfigs }
 * */
export function nextClsxConfigs(): {} | NextClsxConfigs

/**
 * Keeps track of the route/path calling next-clsx module
 * @class
 * */
export class CurrentRoute {
  /**
   * Project root directory 
   * @private
   * */
  private root: string
  private _prepareStackTrace: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined
  private prepareStackTrace: () => void
  /**
   * Error stack*/
  private stack: string | undefined
  private _prepareStackTrace_: () => void

  /**
   * Return route/path of to the module
   * calling next-clsx module or undefined
   * @param {string} caller Reference path
   * @returns {string | undefined}
   * */
  route(caller: string): string | undefined
}

