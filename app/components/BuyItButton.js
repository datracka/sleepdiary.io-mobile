import React, {PropTypes} from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import BuyItPage from './BuyItPage';
import BackButton from './BackButton';

const propTypes = {
  toBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 5,
  },
});

export default class BuyItButton extends React.Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.toRoute(
      {
        id: 1,
        name: 'Sleep Diary',
        component: BuyItPage,
        leftCorner: BackButton
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
            source={require('../images/ic_chevron_left_white.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

