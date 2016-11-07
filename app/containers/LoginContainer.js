import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {login} from '../actions';
import {AsyncStorage} from 'react-native';

import BuyItButton from '../components/BuyItButton';
import ProfileButton from '../components/ProfileButton';
import HomePage from '../pages/HomePage';

var STORAGE_KEY = 'id_token';

async function _onValueChange(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}

const mapStateToProps = (state) => {
  return {
    login: {
      email: state.login.email,
      password: state.login.password,
      data: state.data
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    submitLoginForm: (values) => {
      dispatch(login(values))
        .then((payload) => {

          _onValueChange(STORAGE_KEY, payload.value.data.token_key);

          ownProps.toRoute(
            {
              id: 1,
              name: 'Sleep Diary',
              component: HomePage,
              leftCorner: BuyItButton,
              rightCorner: ProfileButton,
            }
          );

        }).catch((payload) => {
        console.log("error!", payload);
      })
    }
  }
}

export default LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)