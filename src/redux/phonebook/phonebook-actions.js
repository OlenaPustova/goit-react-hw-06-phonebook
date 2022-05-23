import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('addContact', formData => {
  return {
    payload: {
      ...formData,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('deleteContact');

export const findContact = createAction('findContact');
