import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllClients = createAsyncThunk(
  "clients/fetchAllClients",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      return response.data.users;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  isLoading: false,
  AllClients: [],
  search: "",
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    search: (state,action) => {
      state.search=action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllClients.fulfilled, (state, action) => {
      state.isLoading = false;
      state.AllClients=action.payload;
    }),
      builder.addCase(fetchAllClients.rejected, (state, action) => {
        state.isLoading = false;
        state.AllClients = action.payload;
      }),
      builder.addCase(fetchAllClients.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { addClient } = clientsSlice.actions;
export default clientsSlice.reducer;
