import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer, Title, ContactListContainer, NoContactsMessage } from './AppStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from '../Redux/actions/contactsActions';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactListContainer>
        {contacts && contacts.length > 0 ? (
          <ContactList />
        ) : (
          <NoContactsMessage>No contacts to display.</NoContactsMessage>
        )}
      </ContactListContainer>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </AppContainer>
  );
};

export default App;
