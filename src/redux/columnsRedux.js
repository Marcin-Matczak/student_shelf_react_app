import shortid from "shortid";

// selectors
export const getColumnsForList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

// action name creator
const reducerName = "columns";
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName("ADD_COLUMN");

// action creators
export const createActionAddColumn = (payload) => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_COLUMN,
});

// reducer
export default function columnsReducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

// plik odpowiedzialny za wszystkie szczegóły obsługi kolumn przez magazyn
// pakiet shortId tworzy niezwykle krótkie, niesekwencyjne, unikalne identyfikatory przyjazne dla adresów URL.
