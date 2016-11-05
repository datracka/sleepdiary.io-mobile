import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';

import styles from '../styles'
export default class TestComponent extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Here comes the calendar!</Text>
      </View>
    )
  }
}
