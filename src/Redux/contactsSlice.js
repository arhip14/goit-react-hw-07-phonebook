import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from '../components/contactApi'; 

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const contacts = await contactApi.fetchContacts();
  return contacts;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const newContact = await contactApi.addContact(contact);
  return newContact;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await contactApi.deleteContact(contactId);
  return contactId;
});

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: "",
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
