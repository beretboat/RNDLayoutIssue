/**
 * Sample React Native Desktop App
 * https://github.com/ptmt/react-native-desktop
 */
 import React from 'react-native-desktop';
 const {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   LayoutAnimation,
   TouchableHighlight,
 } = React;

var Button = React.createClass({
  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this.props.onPress} >
        <Text style={styles.buttonTitle}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
});


const RNDLayoutIssue = React.createClass({
  getInitialState(){
    return {
      lowIndex: 20,
      upIndex: 30,
      controls: [],
    };
  },

  componentWillMount() {
    this._updateControl();
  },

  _updateControl() {
    var array = [];
    for (var i = this.state.lowIndex; i < this.state.upIndex; i++) {
      array.push(<Button title={i}  key={i}/>)
    }
    this.setState({controls: array});
  },

  _add() {
    this.setState({lowIndex: this.state.lowIndex-1})
    this._updateControl();
  },

  _remove() {
    this.setState({lowIndex: this.state.lowIndex+1})
    this._updateControl();
  },


  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Button title='+' onPress={this._add}/>
          <Button title='-' onPress={this._remove}/>
        </View>
        <View style={{flexDirection: 'row', padding: 5}}>
          {this.state.controls}
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
  },
  button: {
    width: 40,
    height: 40,
    margin: 3,
    backgroundColor: '#15FCFF',
  },
});

AppRegistry.registerComponent('RNDLayoutIssue', () => RNDLayoutIssue);
