# spinal-browser-viewer-offline

## Dependencies

### Install [pm2](https://github.com/Unitech/pm2) globally

```
$ npm install pm2 -g
```

## Installation

### Initilize a package.json file

```
$ npm init
```

### Install the package locally

This will install the package

- [spinal-browser-viewer](https://github.com/spinalcom/spinal-browser-viewer)
  - [spinal-organ-forge](https://github.com/spinalcom/spinal-organ-forge)
  - [spinal-browser-admin](https://github.com/spinalcom/spinal-browser-admin)
    - [spinal-core-hub](https://github.com/spinalcom/spinal-core-hub)
    - [spinal-core-connectorjs](https://github.com/spinalcom/spinal-core-connectorjs)

```
npm install git+https://github.com/spinalcom/spinal-browser-viewer
```

## Configuration

### Edit the file `.config.json`

check https://github.com/spinalcom/spinal-organ-forge to set the config

## Run the `launch.config.js` script with pm2

```
$ pm2 start launch.config.js
```

## Basic usage

The drive is a browser application. To use it you need to access it via a browser (you may change the host/port corresponding to your `.config.json` file):

[`http://127.0.0.1:7777/html/drive/index.html`](http://127.0.0.1:7777/html/drive/index.html)

the credentials are written in the .config.json
the value of SPINAL_PASSWORD is for the user admin, etc...
