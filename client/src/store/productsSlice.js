import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { guestRequest } from "../http/requests";

const handleError = (state, action) => {
    return {
        ...state,
        error: action.error,
        status: "error"
    }
}

const handlePending = (state, action) => {
    return {
        ...state,
        error: null,
        status: 'pending'
    }
}

/*
  Reducer
*/
const initialState = {
    products: {},
    productsOnASale: {},
    error: null,
    status: 'idle' // idle / loading / ?error
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = "idle";
            })
            .addCase(fetchProductsOnASale.fulfilled, (state, action) => {
                state.productsOnASale = action.payload;
                state.status = "idle";
            })
            .addCase(fetchAllProducts.pending, handlePending)
            .addCase(fetchAllProducts.rejected, handleError)
            .addCase(fetchProductsOnASale.pending, handlePending)
            .addCase(fetchProductsOnASale.rejected, handleError);
    }
});

export default productsSlice.reducer;

/*
  Selector creators
*/
export const selectProducts = state => state.products.products;
export const selectProductsOnASale = state => state.products.productsOnASale;
export const selectProductsError = state => state.products.error;
export const selectProductsStatus = state => state.products.status;

/*
  Thunk actions
*/
export const fetchAllProducts = createAsyncThunk("products/fetchAll", async (params) => {
    try {
        const response = await guestRequest.get("api/product/getall" + (params || ""));
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});

export const fetchProductsOnASale = createAsyncThunk("products/fetchOnASale", async () => {
    try {
        const response = await guestRequest.get("api/product/getall?order=3");
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});

export const fetchOneProduct = createAsyncThunk("products/fetchOne", async (id) => {
    try {
        const response = await guestRequest.get("api/product/getone/" + id);
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});
