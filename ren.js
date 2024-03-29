import React, { PureComponent } from 'react';

import { StyleSheet, View } from 'react-native';

const RADIUS = 20;

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;

    const y = 460; /* for ios screen  550; */

    return <View style={[styles.finger, { left: x, top: y }]} />;
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: '#CCC',

    borderWidth: 4,

    borderRadius: RADIUS * 2,

    width: RADIUS * 2,

    height: RADIUS * 2,

    backgroundColor: 'deepskyblue',

    position: 'absolute',
  },
});

export { Finger };
