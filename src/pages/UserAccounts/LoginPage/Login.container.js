import { connect } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { Login } from './Login';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
    alerts: state.alert
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => {
      dispatch(login(user))
    }
  }
}

const LoginContainer =  connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer;
