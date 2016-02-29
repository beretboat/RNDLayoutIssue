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
        <View><Text style={styles.buttonTitle}>
          {this.props.title}
        </Text>
        <Text style={{fontSize: 8}}>{(new Date().getTime()).toString().slice(-5)}</Text>
        </View>
      </TouchableHighlight>
    );
  }
});


const RNDLayoutIssue = React.createClass({
  getInitialState(){
    return {
      lowIndex: 20,
      upIndex: 30,
      indexes: [],
    };
  },

  componentWillMount() {
    this._updateControl();
  },

  _updateControl() {
    var indexes = [];
    for (var i = this.state.lowIndex; i < this.state.upIndex; i++) {
      indexes.push(i)
    }
    //LayoutAnimation.spring()
    this.setState({indexes});
  },

  _add() {
    this.setState({lowIndex: this.state.lowIndex-1})
    this._updateControl();
  },

  _remove() {
    this.setState({lowIndex: this.state.lowIndex+1})
    this._updateControl();
  },

  componentDidMount() {
    var remove = j => {
      setTimeout(() => {
        this._remove();
        if (j > 0) {
          if (Math.random() > 0.5) {
            add(j - 1)
          } else {
            remove(j - 1)
          }
        }
      }, 1);
    }
    var add = j => {
      setTimeout(() => {
        this._add();
        if (j > 0) {
          if (Math.random() > 0.5) {
            add(j - 1)
          } else {
            remove(j - 1)
          }
        }
      }, 1);

    }
    remove(10)
  },

  render() {

    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Button title='+' onPress={this._add}/>
          <Button title='-' onPress={this._remove}/>
        </View>
        <View><Text>Total buttons now: {this.state.indexes.length}</Text></View>
        <View style={{flexDirection: 'row', padding: 5}}>
          {this.state.indexes.map(i => <Button title={i} key={i} /> )}
        </View>
        {<View>
          {this.state.indexes.map(i => <Text key={i}>{i}</Text> )}
        </View>}
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
    opacity: 0.3,
    width: 60,
    height: 60,
    margin: 3,
    backgroundColor: '#15FCFF',
  },
});

AppRegistry.registerComponent('RNDLayoutIssue', () => RNDLayoutIssue);
