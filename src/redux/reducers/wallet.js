import { ADD_WALLET, SAVE_EXPENSES, ADD_BUTTON } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_WALLET:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((element) => element !== 'USDT'),
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ADD_BUTTON:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
