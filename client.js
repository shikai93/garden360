// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

import {TooltipModule} from './modules/toolTipModule';
import {SceneModule} from './modules/sceneModule';
import 'webvr-polyfill';
// WebVRPolyfill.InstallWebVRSpecShim();

export let r360;
let toolTipModule = new TooltipModule ()
function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [toolTipModule, new SceneModule()],
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface (
    r360.createRoot ('MainComponent'),
    r360.getDefaultSurface ()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  // r360.compositor.setBackground(r360.getAssetURL('canteen360.jpg'));
}

window.React360 = {init};
