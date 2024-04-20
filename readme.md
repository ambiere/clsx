## Configuration

To enhance styling workflow, improving reusability and 
simplifying maintenance tasks.<br>next-clsx provide several
configuration options to customize the behavior of next-clsx
according to your project's requirements.

> Configuration file name convention: `clsx.config.mjs`

Below are the available configuration options:

#### `root`

- Type: `string`
- Optional: `true`
- Default: `./app/ui/style/`
- Description: Allow you to specify the absolute path to root global styles.

#### `routeRoot`

- Type: `Array`
- Optional: `true`
- Default: `[]`
- Value(s): Array<[RouteObject](#src/docs/routeobject)>
- Description: Allow you to specify routes with route-level global styles.
