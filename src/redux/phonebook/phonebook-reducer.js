// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, findContact } from './phonebook-actions';

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [findContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
