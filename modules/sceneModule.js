import {Module} from 'react-360-web';
// import {Environment} from 'react-360';

import * as sceneService from '../services/sceneService';
import {r360} from '../client';

export class SceneModule extends Module {
  constructor () {
    super ('SceneModule');
  }

  setScene(location) {
    const data = sceneService.getBackground(location)
    r360.compositor.setBackground(r360.getAssetURL(data),{
      format: '2D',
    });
    // Environment.setBackgroundImage(asset(data.background), {
    //     format: data.format,
    //     transition : 2,
    //     fadeLevel : 2,
    // });
  }
}