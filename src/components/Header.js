import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderArray = () => {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach((element) => {
      const calculate = element.value * element.exchangeRates[element.currency].ask;
      sum += calculate;
    });
    return sum.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">{ this.renderArray() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
