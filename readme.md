## Configuration

To enhance styling workflow, improving reusability and
simplifying maintenance tasks.<br>next-clsx provide several
configuration options to customize the behavior of next-clsx
according to your project's requirements.

> Configuration file name convention: `clsx.config.mjs`

Below are the available configuration options:

```txt
root                                  Specify the absolute path to root global styles
                                      Default: <"./app/ui/style/">
                                      Optional: <true>
                                      Type: <string>

routeRoot                             specify rout


```



#### `root`

- Type: `string`
- Optional: `true`
- Default: `./app/ui/style/`
- Description: Allow you to specify the absolute path to root global styles.

#### `routeRoot`

- Type: `Array`
- Optional: `true`
- Default: `[]`
- Value(s): Array<[RouteObject](#RouteObject)>
- Description: Allow you to specify routes with route-level global styles.

## License

[MIT license][MIT]

[MIT]: https://github.com/ambiere/next-clsx/blob/main/license

