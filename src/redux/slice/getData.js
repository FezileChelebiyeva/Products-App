import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchData = createAsyncThunk("fetchData", async (value) => {
  const response = await axios.get("http://localhost:8000/products");
  return response.data.filter((elem) =>
    elem.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
});
export const deleteData = createAsyncThunk("deleteData", async (id) => {
  await axios.delete(`http://localhost:8000/products/${id}`);
});

export const postData = createAsyncThunk("postData", async (values) => {
  await axios.post("http://localhost:8000/products", values);
  // return response.data;
});

export const getDataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = "Data Not Found";
    });
  },
});

// export const {} = counterSlice.actions
export default getDataSlice.reducer;
