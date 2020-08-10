import React from 'react';
import {asset, Image, View, StyleSheet, NativeModules, Text, VrButton} from 'react-360';

const tooltipModule = NativeModules.TooltipModule;
const sceneModule = NativeModules.SceneModule;
export default class TooltipComponent extends React.Component {
  state = {
    infoImage: this.props.infoImg,
    icon: this.props.iconImg,
    width: this.props.width ? this.props.width : 100,
    height: this.props.height ? this.props.height : 100,
    showInfo : false,
    isWayPoint : this.props.destination != undefined,
    isMouseOver : false,
  };

  onMouseOn () {
    if (this.state.isMouseOver) {return}
    tooltipModule.resizeTooltip (this.props.index, this.props.width + 20, this.props.height + 20);
    this.setState ({
        width: this.props.width + 20,
        height: this.props.height + 20,
        isMouseOver : true
    });
  }

  onMouseClick() {
    if (this.state.isWayPoint) {
        // uncomment until when images garden360.jpg and canteen360.jpg are ready
        sceneModule.setScene(this.props.destination)
        tooltipModule.setTooltips(this.props.destination)
        return
    }
    var showInfo = !this.state.showInfo
    if (showInfo) {
        tooltipModule.resizeTooltip (this.props.index, 300, 300);
        this.setState({showInfo : showInfo, width: 300, height: 300})
    } else {
        tooltipModule.resizeTooltip (this.props.index,this.props.width,this.props.height);
        this.setState({showInfo : showInfo, width: this.props.width, height: this.props.height})
    }
  }

  onMouseOut () {
    if (!this.state.isMouseOver) {return}
    if (this.state.showInfo){
        return
    }
    tooltipModule.resizeTooltip (this.props.index,this.props.width,this.props.height);
    this.setState ({
        width: this.props.width,
        height: this.props.height,
        isMouseOver : false,
    });
  }

  render () {
    const styleSheet = StyleSheet.create ({
      viewPanel: {
        width: this.state.width,
        height: this.state.height,
        borderRadius: 10,
      },
      wayPointPanel : {
        alignSelf : 'center',
        width: this.state.width - 50,
        height: this.state.height - 50
      },
      imagePanel : {
        width: this.state.width,
        height: 200
      },
      textBlock: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#FFFFFF',
        width: 300,
        maxHeight: 100,
      },
      labelPanel : {
        width: this.state.width,
      },
      label: {
        fontSize: 24,
        alignSelf : "center",
        color: '#FFFFFF',
      },
      text: {
        fontSize: 24,
        color: '#000000',
      },
    });

    return (
      <View
        hitSlop={160}
        style={styleSheet.viewPanel}
        onEnter={() => this.onMouseOn ()}
        onExit={() => this.onMouseOut ()}
      >
        <VrButton onClick={() => this.onMouseClick()} >
            {!this.state.showInfo && this.state.isWayPoint &&
                <View style={styleSheet.labelPanel}>
                    <Image
                        source={asset (`${this.state.icon}`)}
                        style={styleSheet.wayPointPanel}
                    />
                    <Text style={styleSheet.label}>
                        {this.props.label}
                    </Text>
                </View>
            }
            {!this.state.showInfo && !this.state.isWayPoint &&
                <Image
                    source={asset (`${this.state.icon}`)}
                    style={styleSheet.viewPanel}
                />
            }
            {this.state.showInfo &&
                <View>
                    <Image
                        source={asset(`${this.state.infoImage}`)}
                        style={styleSheet.imagePanel}
                    />
                    <View style={styleSheet.textBlock}>
                        <Text style={styleSheet.text}>{this.props.text}</Text>
                    </View>
                </View>
            }
        </VrButton>
      </View>
    );
  }
}