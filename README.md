# angular-boilerplate

A boilerplate for creating react.js/webpack apps.

### Requirements

* gnu coreutils (windows version can be downloaded from [http://gnuwin32.sourceforge.net/packages/coreutils.htm]())
* node 8 or greater, npm 6 or greater
* coreutils, node and npm added to the system path

## Getting started

To install all dependencies, run:

```
npm install
```

## Development

To build app in development mode (builds with source maps for debugging and watching for live-reloading), run:

```
npm run watch
```

Then to deploy the app with live-reloading, in a separate terminal run:

```
npm run server
```

The application will be available at http://localhost:8080.

## Production

To build app in production mode, run:

```
npm run build
```

You can then test the build by running:

```
npm run server
```

The application will be available at http://localhost:8080.

## Project Structure

```
dist/           # location of development and production builds
src/
    app/        # location of application source files (compilable .css, .html and .ts files)
    assets/     # location of static assets
    test/       # location of tests
```
