import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6509d050f6553137159c10b5.mockapi.io/';

const fetchAdverts = async (page = 1) => {
  const path = `/adverts?completed=false&page=${page}&limit=8`;
  const response = await axios.get(path);
  return response.data;
};

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (_, thunkAPI) => {
    try {
      return await fetchAdverts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdvertsByPage = createAsyncThunk(
  'adverts/getAdvertsByPage',
  async ({ page }, thunkAPI) => {
    try {
      return await fetchAdverts(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
