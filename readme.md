## Configuration

To enhance styling workflow, improving reusability and
simplifying maintenance tasks.<br>next-clsx provide several
configuration options to customize the behavior of next-clsx
according to your project's requirements.

> Configuration file name convention: `clsx.config.mjs`

Below are the available configuration options:

```txt
root           Specify the absolute path to root global styles
               Default: "./app/ui/style/"
               Optional: true
               Type: string

routeRoot      Specify routes with route-level global styles.
               Default: []
               Optional: true
               Type: Array
               ArrayValue: <RouteObject>
```


## RouteObject
##### `route`

- Type: `string`
- Description: Absolute path to the route root

##### `root`

- Optional: `true`
- Default: `project-root/path/to/route/ui/styles/`
- Description: Absolute path to the route-level global styles for a given route

##### `replaceRoot`

- Default: `true`
- Optional: `true`
- Description: All the styles in root global files with the same key as those
in route-level global styles and/or local styles will be replaced
and if does not exist, will be defined in global files and will only be accessible
by the route itself. If you want to opt out of this behavior you need to specify how should
the local styles and/or route-level global styles be handled with either
`overrideRoot` or `mergeWithRoot` options, hence,`replaceRoot` will automatically
be set to false, no need to explicit set it to false.

##### `mergeWithRoot`

- Default: `false`
- Optional: `true`
- Description: All the styles in root global files with the same key as those
in local styles and/or route-level global styles will be merged
and if does not exist, will be defined in global files and will only be accessible
by the route itself.

##### `overrideRoot`

- Default: `false`
- Optional: `true`
- Description: All the styles in root global files will be overridden with local styles
and/or route-level global styles.

Precedence:

`configs.overridden` > `configs.mergeWithRoot` > `configs.overrideRoot`



## License

[MIT license][MIT]

[MIT]: https://github.com/ambiere/next-clsx/blob/main/license

