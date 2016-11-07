import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';

import styles from '../styles'
export default class TestComponent extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    console.log("Monhtly view", this.props);
    return (
      <View style={styles.container}>
          <Text>Here comes the calendar!</Text>
      </View>
    )
  }
}
