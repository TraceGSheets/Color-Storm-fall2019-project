import * as React from 'react';
import { Text, View } from "react-native";

class GameTimer extends React.Component {
constructor(props) {
  super(props);
  this.state ={ timer: 60}
}

componentDidMount(){
  this.interval = setInterval( () => 
    this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
    1000
  );
}

componentDidUpdate(){
  if(this.state.timer === 1){ 
    clearInterval(this.interval);
  }
}

componentWillUnmount(){
 clearInterval(this.interval);
}

render() {
  return (
    <View style ={{ flex: 1, justifyContent: 'center', }}>
      <Text> {this.state.timer} </Text>
    </View>
  )
}
}

export {GameTimer};
