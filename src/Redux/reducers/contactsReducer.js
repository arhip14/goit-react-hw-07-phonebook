const actionTypes = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
};
const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

const addContact = (contact) => ({
  type: actionTypes.ADD_CONTACT,
  payload: contact,
});

const deleteContact = (contactId) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export { contactsReducer, addContact, deleteContact };
