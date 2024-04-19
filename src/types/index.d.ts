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
}

export interface ClsxObject {
  [index: string]: Clsx
}

export type Styles = {
  _configs_?: StylesConfigs,
  clsx: ClsxObject
} | Clsx














export type Root = string



export type GlobalClsx = {
  [index: string]: Clsx
}


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
   * @returns {GlobalClsx | {} | undefined} clsx 
   * */
  prepareClsx(): GlobalClsx | {} | undefined
  processClsx(): void
  /**
   * Synchronously read global styles
   * @param {string} path
   * @returns {Clsx | undefined}
   * @private
   * */
  private readClsxSync(path: string): Clsx | undefined

  /**
   * Asynchronously import global styles
   * @param {string} path 
   * @returns {Promise<Clsx | undefined>}
   * @private
   * */
  private readClsx(path: string): Promise<Clsx | undefined>

  /**
   * Asynchronously get root global styles if defined
   * @returns {Promise<{root: Clsx | undefined}>}
   * @private
   * */
  private getRootClsx(): Promise<{ root: Clsx | undefined }>

  /**
   * Asynchronously get route global styles to be merged with root global styles
   * @returns {Promise<{[index:string]: Clsx | undefined}>}
   * @private
   * */
  private geRouteRootClsx(): { [index: string]: Clsx | undefined }
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

