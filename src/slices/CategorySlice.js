import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:4000/categories");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addCategory = createAsyncThunk("categories/addCategory", async (newCategory, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:4000/categories", 
      {
        name: newCategory
      }
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateCategory = createAsyncThunk("categories/updateCategory", async ({ id, updatedData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`http://localhost:4000/categories/${id}`, updatedData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteCategory = createAsyncThunk("categories/deleteCategory", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:4000/categories/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Categories
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Add Category
      .addCase(addCategory.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Update Category
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.data.findIndex((category) => category.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Delete Category
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.data = state.data.filter((category) => category.id !== action.payload);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;