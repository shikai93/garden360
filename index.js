import React from 'react';
import {AppRegistry, View, NativeModules} from 'react-360';

import {wrap} from './components/Wrapper';
import TooltipComponent from './components/TooltipComponent';
// import TransitionComponent from './components/Transition/Transition.component';

export default class MainComponent extends React.Component {
  render () {
    NativeModules.TooltipModule.setTooltips (this.props.name);
    // NativeModules.TransitionModule.setTooltips (this.props.name);
    return <View />;
  }
}

// AppRegistry.registerComponent ('TransitionComponent', () =>
//   wrap (TransitionComponent)
// );
AppRegistry.registerComponent ('MainComponent', () => wrap (MainComponent));
AppRegistry.registerComponent ('TooltipComponent', () => wrap (TooltipComponent));

// AppRegistry.registerComponent('garden360', () => garden360);
