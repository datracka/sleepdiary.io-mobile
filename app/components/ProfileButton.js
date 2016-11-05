import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import ProfilePage from '../pages/ProfilePage';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 5,
    marginRight: 5,
  },
});

export default class ProfileButton extends React.Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    /*Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'OK', onPress: () => {} },
      ]
    );*/
    this.props.toRoute(
      {
        id: 1,
        name: 'Sleep Diary',
        component: ProfilePage,
        leftCorner: BackButton,
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
          underlayColor={'transparent'}
        >
          <Image
            source={require('../images/ic_account_circle_white.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
