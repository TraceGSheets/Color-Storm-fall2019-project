import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(.8)
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: 550 }
        ]),
      });
  }

  render() {
    return (
      <View style={{ width: "100%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.ball, {opacity:this.state.opacity}]}
         />
        </View>
      );
    }
  }
}


export default class App extends Component {
  render() {
    return (
      <View>
        <View>
        <View style={styles.ballContainer} />
        </View>
        <View>
          <Draggable />
        </View>
      </View>
    );
  }
}

const BALL = 20;
const styles = StyleSheet.create({
  
  ballContainer: {
    height:550
  },
  ball: {
    backgroundColor: "red",
    width: BALL * 2,
    height: BALL * 2,
    borderRadius: BALL
  },
  
  
});
