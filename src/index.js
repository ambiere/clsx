import NextClsxStore from "./lib/clsx-store.js"
import CurrentRoute from "./lib/current-route.js"

export default function nextClsx(componentClsx, options = {}) {
  return (classname, ...classnames) => {
    const currentRoute = new CurrentRoute()
    const nextClsxStore = new NextClsxStore()

    const clsx = nextClsxStore.prepareClsx()
    if (clsx) {
      processRouteClsx(clsx)
      return getElementClsx()
    }
    return ""

    function processRouteClsx(clsx) {
      if (componentClsx) {
        if (!componentClsx._configs_)
          nextClsxStore.processClsx({
            clsx: componentClsx,
            configs: {
              replaceRoot: true
            }
          })
        else nextClsxStore.processClsx({
          clsx: componentClsx.clsx,
          configs: componentClsx._configs_
        })
      }
      Object.keys(clsx).map(key => {
        if (key !== "./" && currentRoute.route(key)) return nextClsxStore.processClsx(clsx[key])
      })
    }

    function getElementClsx() {
      let i = 0
      const clsx = []
      classname = classname[0].split(' ')
      classname.push(classnames)
      classname = classname.flat().filter((classname) => classname !== '')
      classname.map(classname => {
        const elementClsx = nextClsxStore.clsx[classname]
        if (elementClsx) {
          const elementClsxKeys = Object.keys(elementClsx)
          while (i < elementClsxKeys.length) {
            const elementClsxValue = elementClsx[elementClsxKeys[i]]
            switch (elementClsxKeys[i]) {
              case "props":
                return elementClsxValue.map(propName => clsx.push(options.props[propName]))
              case "conds":
                const conditionValue = Object.values(options.conds)
                return conditionValue.map(value => clsx.push(elementClsxValue[value]))
              default:
                clsx.push(elementClsxValue)
                break
            }
            clsx.push(elementClsxValue)
            i++
          }
        } else
          console.warn(
            "[Warn]: classname" + classname +
            "has no corresponding styles in component styles or global styles"
          )
      })
      return clsx.join(" ")
    }
  }
}
