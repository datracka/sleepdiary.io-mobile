'use strict';

//https://auth0.com/blog/adding-authentication-to-react-native-using-jwt/
//https://github.com/joshgeller/react-redux-jwt-auth-example
//https://github.com/react-native-simple-router-community/react-native-simple-router

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, AlertIOS, AsyncStorage } from 'react-native';

import HomePage from './HomePage';
import TestPage from './TestPage';
import BuyItButton from '../components/BuyItButton';
import ProfileButton from '../components/ProfileButton';

import t from 'tcomb-form-native';

var Form = t.form.Form;
var STORAGE_KEY = 'id_token';
var User = t.struct({
  email: t.String,
  password: t.String,
});
var options = {}; // optional rendering options (see documentation)

export default class LoginPage extends Component {

  constructor() {
    super();
    this.state = {defaultFormValues: {
        email: 'datracka@gmail.com',
        password: '123456a'
    }}
  }

  render () {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={User}
          value={this.state.defaultFormValues}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this._userLogin.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }

  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  _userLogin() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch("http://localhost/api/1/accounts/session", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: value.email,
          password: value.password,
        })
      })
        .then((response) => response.json())
        .then((responseData) => {
         /* AlertIOS.alert(
            "Login Success!"
          );*/
          this._onValueChange(STORAGE_KEY, responseData.token_key);
          this.props.toRoute(
            {
              id: 1,
              name: 'Sleep Diary',
              component: HomePage,
              leftCorner: BuyItButton,
              rightCorner: ProfileButton,
            }
          );

        })
        .done();
    }
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

