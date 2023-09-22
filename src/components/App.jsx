// Компонент App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Додайте useSelector
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer, Title, ContactListContainer } from './AppStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from '../Redux/actions/contactsActions';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items); // Додайте використання useSelector

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactListContainer>
        {/* Переконайтеся, що contacts існують перед передачею їх у ContactList */}
        {contacts && <ContactList />}
      </ContactListContainer>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </AppContainer>
  );
};

export default App;
