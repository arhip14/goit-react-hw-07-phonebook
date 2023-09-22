import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/actions/contactsActions';
import {
  ContactListContainer,
  ContactListItem,
  ContactInfo,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styles';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListContainer>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactListItem key={contact.id}>
            <ContactInfo>
              <ContactName>{contact.name}</ContactName>
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
