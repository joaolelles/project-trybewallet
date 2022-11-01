import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateEmail());
  };

  validateEmail = () => {
    const { email, password } = this.state;
    const minLength = 6;
    const defaultEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if (defaultEmail.test(email) && password.length >= minLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  render() {
    const { disabled, email } = this.state;
    const { dispatch } = this.props;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            <input
              name="email"
              placeholder="email"
              type="text"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              name="password"
              placeholder="password"
              type="text"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ disabled }
              onClick={ () => dispatch(addEmail(email)) }
            >

              Entrar
            </button>
          </Link>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
