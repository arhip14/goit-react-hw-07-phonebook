import axios from 'axios';

const baseURL = 'https://650d67eea8b42265ec2c2bf2.mockapi.io/phonebook/';
const axiosInstance = axios.create({
  baseURL,
});


export const fetchContacts = async () => {
  const response = await axiosInstance.get('/contacts');
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axiosInstance.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async (contactId) => {
  const url = `/contacts/${contactId}`;
  console.log('DELETE Request URL:', url);

  const response = await axiosInstance.delete(url);
  console.log('DELETE Response:', response);

  return response.data;
};
