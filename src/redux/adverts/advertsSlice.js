import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, getAdvertsByPage } from './operations';

const initialState = {
  items: [],
  currentItems: [],
  favoriteItems: [],
  total: 0,
  isLoading: false,
  error: null,
  filters: { make: '', price: '', mileageFrom: '', mileageTo: '' },
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      const advertIndex = state.favoriteItems.findIndex(
        advert => advert.id === action.payload.id
      );
      if (advertIndex !== -1) {
        state.favoriteItems.splice(advertIndex, 1);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
    updateFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.total = action.payload.length;
        state.currentItems = action.payload.slice(0, 8);
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.items = [];
        state.currentItems = [];
      })
      .addCase(getAdvertsByPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvertsByPage.fulfilled, (state, action) => {
        state.currentItems = [...state.currentItems, ...action.payload];
        state.isLoading = false;
      })
      .addCase(getAdvertsByPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.currentItems = [];
      });
  },
});

export const { setFavorite, updateFilters } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
