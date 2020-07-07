import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
} from 'react-360';

export default class garden360 extends React.Component {
  state = {
    count : 0,
    courseSelected : 0,
  }
  courses = [
    {display : "Hello World", image : "HelloWorld.jpg"},
    {display : "Bot Empire", image : "theBotEmpire.jpg"},
    {display : "The Garage", image : "theGarage.jpg"},
    {display : "The Dorm", image : "TheDorm.jpg"},
    {display : "The Valley", image : "TheValley.jpg"},
    {display : "Office 365", image : "Office365.jpg"},
  ]
  _incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };
  _decreaseCount = () => {
    this.setState({count : this.state.count - 1});
  }
  setCourseSelected = (i) => {
    this.setState({courseSelected : i});
  }

  render() {
    return (
      <View style={{height : 600, width : 4000, flexDirection : "row"}}>
      <View style={styles.panel}>
        <VrButton  onClick ={this._incrementCount} style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
          <Text>Count {`${this.state.count}`}</Text>
        </VrButton>
        {
          this.state.count > 0 && 
          <VrButton  onClick ={this._decreaseCount} style={styles.greetingBox}>
            <Text>Count Down {`${this.state.count}`}</Text>
          </VrButton>
        }
      </View>
      <View style={styles.coursePanelWrapper}>
      {
        this.courses.map((course,i) => 
          <VrButton key={i} onClick ={() => {this.setCourseSelected(i)}} style={styles.coursePanel}>
            {this.state.courseSelected == i && (<Image source={asset(course.image)} style={styles.image}/>)}
            <Text>{`${course.display}`}</Text>
          </VrButton>
        )
      }
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    flex : .1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image : {
    width : 410,
    height : 280,
  },
  coursePanelWrapper: {
    // Fill the entire surface
    flex : .9,
    marginLeft : 83,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'row'
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  coursePanel : {
    flex : 0.125,
    marginLeft : "4%",
    padding : 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    flexDirection : 'column',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('garden360', () => garden360);
