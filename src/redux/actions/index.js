export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_WALLET = 'ADD_WALLET';
export const RESQUEST_API = 'RESQUEST_API';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const ADD_BUTTON = 'ADD_BUTTON';
export const EDIT_FORM = 'EDIT_FORM';
export const EDIT_ON = 'EDIT_ON';
export const EDIT_OFF = 'EDIT_OFF';

export const editForm = (payload) => ({
  type: EDIT_FORM,
  payload,
});

export const editOn = (payload) => ({
  type: EDIT_ON,
  payload,
});

export const editOff = (payload) => ({
  type: EDIT_OFF,
  payload,
});

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

export const addBtn = (payload) => ({
  type: ADD_BUTTON,
  payload,
});

export const resquestApi = () => ({
  type: RESQUEST_API,
});

export const addWallet = (payload) => ({
  type: ADD_WALLET,
  payload,
});

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export function handleFetch() {
  return async (dispatch) => {
    dispatch(resquestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(addWallet(json)));
  };
}
