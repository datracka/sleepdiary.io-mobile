import {connect} from 'react-redux'
import LoginForm from '../components/LoginForm';
import { reduxForm, formValueSelector } from 'redux-form';


let reduxLoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

const selector = formValueSelector('loginForm');

function mapStateToProps(state){
  return {
    email: selector(state, 'email'),
    password: selector(state, 'password'),
  }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}




export default LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxLoginForm)