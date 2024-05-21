import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { number } from 'prop-types';

axios.defaults.baseURL = 'https://63c59797e1292e5bea26fbb7.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (name, number, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        id: nanoid(),
        name: name,
        number: number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);