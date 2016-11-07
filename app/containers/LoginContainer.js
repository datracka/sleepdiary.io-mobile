import {connect} from 'react-redux'
import LoginForm from '../components/LoginForm';
import {login} from '../actions'

const mapStateToProps = (state) => {
  return {
    login: {
      email: state.login.email,
      password: state.login.password
    }
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    submitLoginForm: (values) => {
        dispatch(login(values))
    }
  }
}

export default LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)