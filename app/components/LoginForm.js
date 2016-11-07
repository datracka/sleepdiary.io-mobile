'use strict'

import React from 'react';
import { TextInput, View, TouchableHighlight, Text } from 'react-native';
import styles from '../styles';

var t = require('tcomb-form-native');
var Form = t.form.Form;

var User = t.struct({
  email: t.String,
  password: t.String,
});
var options = {}; // optional rendering options (see documentation)

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={User}
          value={ this.props.login }
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.submitLoginForm.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }

  submitLoginForm() {
    this.props.submitLoginForm(this.refs.form.getValue());
  }
}


