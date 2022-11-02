import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleFetch } from '../redux/actions';

class WalletForm extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleFetch());
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            name="value"
            data-testid="value-input"
            type="number"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="coin">
          <select data-testid="currency-input" name="coin">
            {currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            name="payment"
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria
          <select
            name="category"
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
