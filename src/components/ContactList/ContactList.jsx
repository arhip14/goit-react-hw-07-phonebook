import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../Redux/actions/contactsActions';
import {
  ContactListContainer,
  ContactListItem,
  ContactInfo,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styles';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) => {
    if (typeof contact.name === 'string' && typeof filter === 'string') {
      return contact.name.includes(filter);
    }
    return false;
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId))
      .then(() => {
        dispatch(fetchContacts());
      })
      .catch((error) => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <ContactListContainer>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactListItem key={contact.id}>
            <ContactInfo>
              <ContactName>{contact.name}:</ContactName>
              <ContactNumber>{contact.number}</ContactNumber>
            </ContactInfo>
            <DeleteButton onClick={() => handleDelete(contact.id)}>Delete</DeleteButton>
          </ContactListItem>
        ))}
      </ul>
    </ContactListContainer>
  );
};

export default ContactList;
