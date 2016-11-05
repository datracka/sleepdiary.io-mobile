import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import {Provider} from 'react-redux'
import Router from 'react-native-simple-router';
import store from "./store"

import SplashPage from './pages/SplashPage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#3b5999',
  },
});

export default function native(platform) {
  class sleepdiaryioMobile extends Component {

    render() {

      return (
        <Provider store={store}>
          <Router
            firstRoute={{
              id: 0,
              name: 'splashPage',
              component: SplashPage,
              hideNavigationBar: true,
            }}
            headerStyle={styles.header}
            ref={'router'}
          />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('sleepdiaryioMobile', () => sleepdiaryioMobile);
}