import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';
import {SHOW_SLEEPING_QUALITY, SHOW_TIREDNESS_FEELING} from '../constants'

export default class TestComponent extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>

      </View>
    )
  }
}
