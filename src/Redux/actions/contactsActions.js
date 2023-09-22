import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from '../../components/contactApi';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  return contactApi.fetchContacts();
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  return contactApi.addContact(contact);
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  return contactApi.deleteContact(contactId);
})
  export const setFilter = (filter) => ({
  type: 'contacts/setFilter',
  payload: filter,
});
