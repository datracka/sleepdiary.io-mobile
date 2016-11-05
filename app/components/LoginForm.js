'use strict'

import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { TextInput, View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

class LoginForm extends React.Component {

  handeSubmit(email, password){ alert(`email: ${email} and password: ${password}`)};

  render() {

    return (
      <View>
        <Field
          name="email"
          component={TextInput}
          placeholder="Email"
        />
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Field
          name="password"
          component={TextInput}
          placeholder="Password"
          secureTextEntry={true}

        />
        <TouchableHighlight onPress={() => this.handeSubmit(this.props.email, this.props.password)}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

const selector = formValueSelector('loginForm');

function mapStateToProps(state){
  return {
    email: selector(state, 'email'),
    password: selector(state, 'password'),
  }
}

LoginForm = connect(mapStateToProps)(LoginForm);

export default LoginForm;