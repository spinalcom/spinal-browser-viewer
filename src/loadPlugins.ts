/*
 * Copyright 2023 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

// // for dev 
// import 'spinal-env-viewer-context-geographic';
// import 'spinal-env-viewer-plugin-circular-menu';
// // import 'spinal-env-viewer-plugin-dashboard-standard';
// import 'spinal-env-viewer-plugin-documentation';
// // import 'spinal-env-viewer-plugin-endpoint_chart_viewer';
// import 'spinal-env-viewer-plugin-forge';
// import 'spinal-env-viewer-plugin-generate_geographic_context';
// import 'spinal-env-viewer-plugin-graph-manager';
// // import 'spinal-env-viewer-plugin-graph_export';
// import 'spinal-env-viewer-plugin-node-inspector';
// import 'spinal-env-viewer-plugin-scene';
// // import 'spinal-env-viewer-plugin-spinal-linker';
// import 'spinal-env-viewer-plugin-standard_button';
// // import 'spinal-env-viewer-plugin-version';
// // import 'spinal-env-viewer-room-manager';
// // import 'spinal-env-viewer-window-selection';
// // import 'spinal-env-viewer-plugin-item_model_selector';
// // import 'spinal-env-viewer-plugin-task';
// import 'spinal-env-viewer-plugin-graph_viewer';
// // import 'spinal-env-viewer-plugin-network-tree';
// // import 'spinal-env-viewer-plugin-analytics';
// // import 'spinal-env-viewer-plugin-control-endpoint';
// // import 'spinal-env-viewer-plugin-upload';
// // import 'spinal-env-viewer-plugin-bacnet-manager';
// // import 'spinal-env-viewer-plugin-device_profile';
// // import 'spinal-env-viewer-task-service';
// // import 'spinal-env-viewer-plugin-event-emitter';
// // import 'spinal-env-viewer-plugin-park-management';
// import 'spinal-env-viewer-service';
// // import 'spinal-env-viewer-standard-attributs';
// // import 'spinal-env-viewer-plugin-dashboard-panel';
// // import 'spinal-env-viewer-plugin-filter';
// // import 'spinal-env-viewer-plugin-ticket';
// import './plugins/spinal-env-viewer-plugin-generate-spatial-reference';
// // import 'spinal-env-viewer-plugin-attribute-manager';
// // import 'spinal-env-viewer-plugin-organ_ticket_mission';

async function safeImport(promise: Promise<unknown>) {
  try {
    return await promise;
  } catch (error) {
    console.error(error);
  }
}
export function loadPlugins() {
  const plugins = [
    safeImport(import('spinal-env-viewer-context-geographic')),
    safeImport(import('spinal-env-viewer-plugin-circular-menu')),
    safeImport(import('spinal-env-viewer-plugin-dashboard-standard')),
    safeImport(import('spinal-env-viewer-plugin-documentation')),
    safeImport(import('spinal-env-viewer-plugin-endpoint_chart_viewer')),
    safeImport(import('spinal-env-viewer-plugin-forge')),
    safeImport(import('spinal-env-viewer-plugin-generate_geographic_context')),
    safeImport(import('spinal-env-viewer-plugin-graph-manager')),
    safeImport(import('spinal-env-viewer-plugin-graph_export')),
    safeImport(import('spinal-env-viewer-plugin-node-inspector')),
    safeImport(import('spinal-env-viewer-plugin-scene')),
    safeImport(import('spinal-env-viewer-plugin-spinal-linker')),
    safeImport(import('spinal-env-viewer-plugin-standard_button')),
    safeImport(import('spinal-env-viewer-plugin-version')),
    safeImport(import('spinal-env-viewer-room-manager')),
    safeImport(import('spinal-env-viewer-window-selection')),
    safeImport(import('spinal-env-viewer-plugin-item_model_selector')),
    safeImport(import('spinal-env-viewer-plugin-task')),
    safeImport(import('spinal-env-viewer-plugin-graph_viewer')),
    safeImport(import('spinal-env-viewer-plugin-network-tree')),
    safeImport(import('spinal-env-viewer-plugin-analytics')),
    safeImport(import('spinal-env-viewer-plugin-control-endpoint')),
    safeImport(import('spinal-env-viewer-plugin-upload')),
    safeImport(import('spinal-env-viewer-plugin-bacnet-manager')),
    safeImport(import('spinal-env-viewer-plugin-device_profile')),
    safeImport(import('spinal-env-viewer-task-service')),
    safeImport(import('spinal-env-viewer-plugin-event-emitter')),
    safeImport(import('spinal-env-viewer-plugin-park-management')),
    safeImport(import('spinal-env-viewer-service')),
    safeImport(import('spinal-env-viewer-standard-attributs')),
    safeImport(import('spinal-env-viewer-plugin-dashboard-panel')),
    safeImport(import('spinal-env-viewer-plugin-filter')),
    safeImport(import('spinal-env-viewer-plugin-ticket')),
    safeImport(import('spinal-env-viewer-plugin-generate-spatial-reference')),
    safeImport(import('spinal-env-viewer-plugin-attribute-manager')),
    safeImport(import('spinal-env-viewer-plugin-organ_ticket_mission')),
    safeImport(import('spinal-env-viewer-plugin-offset-calcul')),
    // add plugins ex:
    // safeImport(import('spinal-env-viewer-plugin-attribute-manager')),
    // or
    // safeImport(import('./plugins/spinal-env-viewer-plugin-attribute-manager')),
  ];

  // return Promise.all(plugins);
}
