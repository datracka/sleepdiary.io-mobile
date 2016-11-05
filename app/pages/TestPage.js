'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class TestPage extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>Test Page</Text>
      </View>
    );
  }
}