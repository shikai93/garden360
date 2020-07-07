// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

import {Surface} from 'react-360-web';
const myCylinderSurface = new Surface(
  4000, /* width */
  600, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);

import 'webvr-polyfill';
// WebVRPolyfill.InstallWebVRSpecShim();
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('garden360', { /* initial props */ }),
    myCylinderSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
