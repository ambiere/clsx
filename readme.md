## Configuration

To enhance styling workflow, improving reusability and
simplifying maintenance tasks.<br>next-clsx provide several
configuration options to customize the behavior of next-clsx
according to your project's requirements.

> Configuration file name convention: `clsx.config.mjs`

Below are the available configuration options:

```txt
clsx.config.mjs:

{
  <root>             Specify the absolute path to root global styles

                     Default: "./app/ui/style/"
                     Optional: true
                     Type: string

  <routeRoot>        Specify routes with route-level global styles.

                     Default: []
                     Optional: true
                     Type: Array
                     ArrayValue: <RouteObject>
}
```

```txt
RouteObject:

{
  <route>             Absolute path to the route root
                      Type: string

  <root>              Absolute path to the route-level global styles for a given route
                      Default: "project-root/path/to/route/ui/styles/"
                      Optional: true

  <replaceRoot>       All the styles in root global files with the same key as those
                      in route-level global styles and/or local styles will be replaced
                      and if does not exist, will be defined in global files and will only
                      be accessible by the route itself. If you want to opt out of this
                      behavior you need to specify how should the local styles and/or route-level
                      global styles be handled with either `overrideRoot` or `mergeWithRoot`
                      options, hence,`replaceRoot` will automatically be set to false, no need to
                      explicit set it to false.

                      Default: true
                      Optional: true

  <mergeWithRoot>     All the styles in root global files with the same key as those
                      in local styles and/or route-level global styles will be merged
                      and if does not exist, will be defined in global files and will
                      only be accessible by the route itself.

                      Default: false
                      Optional: true

  <overrideRoot>      All the styles in root global files will be overridden with local styles
                      and/or route-level global styles.

                      Default: false
                      Optional: true

}
```

```txt
Precedence:

overrideRoot > mergeWithRoot > overrideRoot
```

Default next-clsx configuration

```js
{
  root: "./app/ui/style/",
  routeRoot: []
}
```

Possible next-clsx configuration

Project  structure:

:



## License

[MIT license][MIT]

[MIT]: https://github.com/ambiere/next-clsx/blob/main/license

