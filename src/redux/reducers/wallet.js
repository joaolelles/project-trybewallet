import {
  ADD_WALLET, SAVE_EXPENSES, ADD_BUTTON, EDIT_OFF, EDIT_ON, EDIT_FORM,
} from '../actions';

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
  case EDIT_FORM:
  {
    const expensesId = state.expenses.map((element) => element.id);
    const findIndex = expensesId.indexOf(action.payload.id);
    const expensesView = [...state.expenses];
    expensesView[findIndex] = action.payload;
    return {
      ...state,
      expenses: expensesView,
    };
  }
  case EDIT_ON:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case EDIT_OFF:
    return {
      ...state,
      editor: false,
      idToEdit: 0,
    };
  default:
    return state;
  }
};

export default wallet;
