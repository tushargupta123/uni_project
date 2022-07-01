import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  selectedType: null,
};

export const defaultType = createAsyncThunk(
  "auth/type",
  async (type, thunkAPI) => {
    try {
      return authService.defaultType(type);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      return authService.loginUser(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(defaultType.fulfilled, (state, action) => {
      state.selectedType = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.selectedType = action.payload;
    });
  },
});

export default authSlice.reducer;
