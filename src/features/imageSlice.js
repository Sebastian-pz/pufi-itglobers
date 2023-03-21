import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'currentImage',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    changeBySpecificValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, changeBySpecificValue } =
  imageSlice.actions;

export default imageSlice.reducer;
