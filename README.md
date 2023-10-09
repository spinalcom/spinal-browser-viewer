# spinal-browser-viewer

## Installation

Download release `viewer.zip` file in the release and extract it in the `.browser_organs` folder.

## offline mode

Edit the file `index.html` update the code like the following:

```html
<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"> <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css" type="text/css"> -->
<link href="offline/cssroboto.css" rel="stylesheet" />
<link rel="stylesheet" href="offline/styleoffline.css" type="text/css" />
...

<!-- <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"></script> -->
<script src="offline/viewer3D.js"></script>
```

** Remove the `index.html.gz` file ( restart http-server if needed ) **

### or via git

```sh
git clone https://github.com/spinalcom/spinal-browser-viewer
```

then create the syslink in .browser_organs

```sh
cd PATH/TO/.browser_organs
ln -s PATH/TO/spinal-browser-viewer/www viewer
```

## install dependencies

It use [spinalcom-utils](https://github.com/spinalcom/spinalcom-utils) cli for installation

```sh
cd PATH/TO/spinal-browser-viewer
spinalcom-utils i
```

## Add a plugin

### via spinalcom-utils

```sh
cd PATH/TO/spinal-browser-viewer
spinalcom-utils install NAME_OF_THE_MODULE
# or
./node_module/.bin/spinalcom-utils install NAME_OF_THE_MODULE
# ex :
#   spinalcom-utils install spinal-core-connectorjs
```

Update the `src/loadPlugins.ts` file with the pluging
ex:

```js
export function loadPlugins() {
  const plugins = [
    // ...
    // ex:
    // safeImport(import('spinal-core-connectorjs')),
  ];
  // ...
}
```

Then build

```sh
cd PATH/TO/spinal-browser-viewer
npm run build
```

** The build may fail a few times, but continue to `npm run build` until it's completed **

## installed plugins

- [spinal-env-viewer-context-geographic](https://github.com/spinalcom/spinal-env-viewer-context-geographic)
- [spinal-env-viewer-plugin-circular-menu](https://github.com/spinalcom/spinal-env-viewer-plugin-circular-menu)
- [spinal-env-viewer-plugin-dashboard-standard](https://github.com/spinalcom/spinal-env-viewer-plugin-dashboard-standard)
- [spinal-env-viewer-plugin-documentation](https://github.com/spinalcom/spinal-env-viewer-plugin-documentation)
- [spinal-env-viewer-plugin-endpoint_chart_viewer](https://github.com/spinalcom/spinal-env-viewer-plugin-endpoint_chart_viewer)
- [spinal-env-viewer-plugin-forge](https://github.com/spinalcom/spinal-env-viewer-plugin-forge)
- [spinal-env-viewer-plugin-generate_geographic_context](https://github.com/spinalcom/spinal-env-viewer-plugin-generate_geographic_context)
- [spinal-env-viewer-plugin-graph-manager](https://github.com/spinalcom/spinal-env-viewer-plugin-graph-manager)
- [spinal-env-viewer-plugin-graph_export](https://github.com/spinalcom/spinal-env-viewer-plugin-graph_export)
- [spinal-env-viewer-plugin-node-inspector](https://github.com/spinalcom/spinal-env-viewer-plugin-node-inspector)
- [spinal-env-viewer-plugin-scene](https://github.com/spinalcom/spinal-env-viewer-plugin-scene)
- [spinal-env-viewer-plugin-spinal-linker](https://github.com/spinalcom/spinal-env-viewer-plugin-spinal-linker)
- [spinal-env-viewer-plugin-standard_button](https://github.com/spinalcom/spinal-env-viewer-plugin-standard_button)
- [spinal-env-viewer-plugin-version](https://github.com/spinalcom/spinal-env-viewer-plugin-version)
- [spinal-env-viewer-room-manager](https://github.com/spinalcom/spinal-env-viewer-room-manager)
- [spinal-env-viewer-window-selection](https://github.com/spinalcom/spinal-env-viewer-window-selection)
- [spinal-env-viewer-plugin-item_model_selector](https://github.com/spinalcom/spinal-env-viewer-plugin-item_model_selector)
- [spinal-env-viewer-plugin-task](https://github.com/spinalcom/spinal-env-viewer-plugin-task)
- [spinal-env-viewer-plugin-graph_viewer](https://github.com/spinalcom/spinal-env-viewer-plugin-graph_viewer)
- [spinal-env-viewer-vue-components-lib](https://github.com/spinalcom/spinal-env-viewer-vue-components-lib)
- [spinal-env-viewer-plugin-network-tree](https://github.com/spinalcom/spinal-env-viewer-plugin-network-tree)
- [spinal-env-viewer-plugin-analytics](https://github.com/spinalcom/spinal-env-viewer-plugin-analytics)
- [spinal-env-viewer-plugin-control-endpoint](https://github.com/spinalcom/spinal-env-viewer-plugin-control-endpoint)
- [spinal-env-viewer-plugin-upload](https://github.com/spinalcom/spinal-env-viewer-plugin-upload)
- [spinal-env-viewer-plugin-bacnet-manager](https://github.com/spinalcom/spinal-env-viewer-plugin-bacnet-manager)
- [spinal-env-viewer-plugin-device_profile](https://github.com/spinalcom/spinal-env-viewer-plugin-device_profile)
- [spinal-env-viewer-task-service](https://github.com/spinalcom/spinal-env-viewer-task-service)
- [spinal-env-viewer-plugin-event-emitter](https://github.com/spinalcom/spinal-env-viewer-plugin-event-emitter)
- [spinal-env-viewer-plugin-park-management](https://github.com/spinalcom/spinal-env-viewer-plugin-park-management)
- [spinal-env-viewer-service](https://github.com/spinalcom/spinal-env-viewer-service)
- [spinal-env-viewer-standard-attributs](https://github.com/spinalcom/spinal-env-viewer-standard-attributs)
- [spinal-env-viewer-plugin-dashboard-panel](https://github.com/spinalcom/spinal-env-viewer-plugin-dashboard-panel)
- [spinal-env-viewer-plugin-filter](https://github.com/spinalcom/spinal-env-viewer-plugin-filter)
- [spinal-env-viewer-plugin-ticket](https://github.com/spinalcom/spinal-env-viewer-plugin-ticket)
- [spinal-env-viewer-plugin-generate-spatial-reference](https://github.com/spinalcom/spinal-env-viewer-plugin-generate-spatial-reference)
- [spinal-env-viewer-plugin-attribute-manager](https://github.com/spinalcom/spinal-env-viewer-plugin-attribute-manager)
- [spinal-env-viewer-plugin-organ_ticket_mission](https://github.com/spinalcom/spinal-env-viewer-plugin-organ_ticket_mission)
