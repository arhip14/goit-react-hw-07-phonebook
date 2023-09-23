import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer, Title, ContactListContainer } from './AppStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from '../Redux/actions/contactsActions';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isContactsArray = Array.isArray(contacts);

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactListContainer>
        {isContactsArray && contacts.length > 0 ? (
          <ContactList />
        ) : (
          <div>No contacts found.</div>
        )}
      </ContactListContainer>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </AppContainer>
  );
};

export default App;
