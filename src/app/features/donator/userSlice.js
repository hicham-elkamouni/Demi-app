import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  darkMode: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
    checkDarkMode: (state, action) => {
      state.darkMode = state.darkMode + 1;
    }
  },
});

export const { login, logout , checkDarkMode } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
