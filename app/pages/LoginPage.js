import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, AlertIOS, AsyncStorage } from 'react-native';

import HomePage from './HomePage';
import TestPage from './TestPage';
import LoginForm from '../components/LoginForm';
import BuyItButton from '../components/BuyItButton';
import ProfileButton from '../components/ProfileButton';
import LoginContainer from '../containers/LoginContainer'

import styles from '../styles'

export default class LoginPage extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
          <LoginContainer></LoginContainer>
      )
    }
}