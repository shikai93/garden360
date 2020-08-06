import {Module} from 'react-360-web';
import {Environment} from 'react-360';

import * as sceneService from '../services/sceneService';

export class SceneModule extends Module {
  constructor () {
    super ('SceneModule');
  }

  setScene(location) {
    const data = sceneService.getTooltips(location)
    Environment.setBackgroundImage(asset(data.background), {
        format: data.format,
        transition : 2,
        fadeLevel : 2,
    });
  }
}