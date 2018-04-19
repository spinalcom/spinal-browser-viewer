# spinal-browser-viewer-offline

## Dependencies

### Pull SpinalHub:v3.0.0 doker image

```
$ docker pull spinalcom/spinalhub:v3.0.0
```

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

* [spinal-browser-viewer-offline](https://github.com/spinalcom/spinal-browser-viewer-offline)
  * [spinal-organ-forge](https://github.com/spinalcom/spinal-organ-forge)
  * [spinal-browser-admin](https://github.com/spinalcom/spinal-browser-admin)
    * [spinal-core-hub#3.0.0](https://github.com/spinalcom/spinal-core-hub)
    * [spinal-core-connectorjs#2.3.0](https://github.com/spinalcom/spinal-core-connectorjs)

```
npm install git+https://github.com/spinalcom/spinal-browser-viewer-offline
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

The 3 basic account are :

| Username | client ID | Password                             |
| -------- | --------- | ------------------------------------ |
| admin    | 168       | JHGgcz45JKilmzknzelf65ddDadggftIO98P |
| root     | 644       | 4YCSeYUzsDG8XSrjqXgkDPrdmJ3fQqHs     |
| user     | 1657      | LQv2nm9G2rqMerk23Tav2ufeuRM2K5RG     |
