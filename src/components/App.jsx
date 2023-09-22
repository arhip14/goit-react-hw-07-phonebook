import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import {
  AppContainer,
  Title,
  FilterWrapper,
  FilterInput,
  ContactListContainer,
  NoContactsMessage,
  ContactListHeader
} from './AppStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../Redux/contactsSlice';
import { setFilter } from '../Redux/actions/contactsActions';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    const savedContactsJSON = localStorage.getItem('contacts');
    if (savedContactsJSON) {
      try {
        const savedContacts = JSON.parse(savedContactsJSON);
        dispatch(addContact(savedContacts));
      } catch (error) {
        console.error('Error parsing contacts from localStorage:', error);
      }
    }
  }, [dispatch]);

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactListContainer>
        <ContactListHeader>Contacts</ContactListHeader>
        <FilterWrapper>
          <label>Filter contacts by name:</label>
          <FilterInput
            type="text"
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
            placeholder="Enter name to filter"
          />
        </FilterWrapper>
        <ContactList />
        {contacts.length === 0 && <NoContactsMessage>No contacts to display.</NoContactsMessage>}
      </ContactListContainer>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </AppContainer>
  );
};

export default App;
