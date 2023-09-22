import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "../actions/contactsActions";

const initialState = {
  contacts: [],
  filter: '',
};

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});

export default contactsReducer;
