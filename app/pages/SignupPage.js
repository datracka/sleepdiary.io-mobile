'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class SignUpPage extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                                   routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
          onPress={this.login.bind(this)}>
          <Text style={{color: 'red'}}>Signup Page</Text>
        </TouchableHighlight>
      </View>
    );
  }
  login() {
    this.props.navigator.pop();
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Header
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = SignUpPage;
