import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, AlertIOS, AsyncStorage } from 'react-native';

import LoginContainer from '../containers/LoginContainer'

import styles from '../styles'

export default class LoginPage extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
          <LoginContainer toRoute={this.props.toRoute}></LoginContainer>
      )
    }
}