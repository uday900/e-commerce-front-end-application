import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    // console.log("first")
    try {
        const response = await axios.get("http://localhost:4000/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});

// Async Thunk to add a product
export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    try {
        const response = await axios.post("http://localhost:4000/products", product);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
});

// Async Thunk to delete a product
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId) => {
    try {
        await axios.delete(`http://localhost:4000/products/${productId}`);
        return productId; // Return the ID of the deleted product to update the state
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
});

// Product slice
const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetchProducts
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = "Error fetching products.";
            })

            // Handle addProduct
            .addCase(addProduct.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(addProduct.rejected, (state) => {
                state.error = "Error adding product.";
            })

            // Handle deleteProduct
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.data = state.data.filter((product) => product.id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.error = "Error deleting product.";
            });
    }
});

export default productSlice.reducer;
