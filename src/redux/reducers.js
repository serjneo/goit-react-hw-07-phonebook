import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filterContacts, addContact, deleteContact } from './actons';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contacts => !contacts.id.includes(payload)),
});

const filter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

const rootReducer = combineReducers({ items, filter });

export default rootReducer;
