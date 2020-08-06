import {Surface, Module} from 'react-360-web';

import * as sceneService from '../services/sceneService';
import {r360} from '../client';

export class TooltipModule extends Module {
  constructor () {
    super ('TooltipModule');
  }

  roots = [];
  surfaces = [];

  setTooltips(location) {
    this.detachAll ();

    const data = sceneService.getTooltips(location)
    const tooltips = data.tooltips
    const navigationPoints = data.navigationPoints
    for (var index in tooltips) {
        var item = tooltips[index]
        this.surfaces.push (
            new Surface (item.width, item.height, Surface.SurfaceShape.Flat)
        );
        this.surfaces[index].setAngle (item.yaw, item.pitch);
        this.roots.push (
            r360.renderToSurface (
                r360.createRoot ('TooltipComponent', {
                    width: item.width,
                    height: item.height,
                    iconImg: 'icons/info.png',
                    index: index,
                    text: item.text,
                    infoImg: item.image,
                }),
                this.surfaces[index]
            )
        );
    }
    for (var index in navigationPoints) {
        var item = navigationPoints[index]
        var i = parseInt(index) + tooltips.length
        this.surfaces.push (
            new Surface (item.width, item.height, Surface.SurfaceShape.Flat)
        );
        this.surfaces[i].setAngle (item.yaw, item.pitch);
        this.roots.push (
            r360.renderToSurface (
                r360.createRoot ('TooltipComponent', {
                width: item.width,
                height: item.height,
                iconImg: 'icons/navigationWayPoint.png',
                index: i,
                label : item.label,
                destination : item.destination
                }),
                this.surfaces[i]
            )
        );
    }
  }

  resizeTooltip (index, width, height) {
    this.surfaces[index].resize (width, height);
  }

  detachAll () {
    for (let i = 0; i < this.roots.length; i++) {
      r360.detachRoot(this.roots[i]);
    }
    this.roots = []
    this.surfaces = []
  }
}