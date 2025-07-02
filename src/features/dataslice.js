import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  people: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPeople: (state, action) => {
      state.people = action.payload;
    },
  },
});

export const { setPeople } = dataSlice.actions;
export default dataSlice.reducer;
