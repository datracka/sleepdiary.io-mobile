'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import LoginPage from './LoginPage';

export default class SplashPage extends Component {

  componentWillMount() {
    console.log("Splash page!");
    setTimeout(() => {
      this.props.toRoute(
        {
          id: 1,
          name: 'loginPage',
          component: LoginPage,
          hideNavigationBar: true,
        }
      );
    }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>Your Sleep Diary</Text>
      </View>
    );
  }
}
