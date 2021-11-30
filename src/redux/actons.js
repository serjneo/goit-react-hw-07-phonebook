import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const filterContacts = createAction('contacts/filterContacts');
const deleteContact = createAction('phonebook/delete');
const addContact = createAction('phonebook/add', (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));

const actions = { filterContacts, deleteContact, addContact };
export default actions;
