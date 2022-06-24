import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { guestRequest } from "../http/requests";

/*
  Reducer
*/
const initialState = {
    entities: {},
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
                state.entities = action.payload;
                state.status = "idle";
            })
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.error = null;
                state.status = "pending";
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.error = action.error;
                state.status = "error"
            })
    }
});

export default productsSlice.reducer;

/*
  Selector creators
*/
export const selectProducts = state => state.products.entities;
export const selectProductsError = state => state.products.error;
export const selectProductsStatus = state => state.products.status;

/*
  Thunk actions
*/
export const fetchAllProducts = createAsyncThunk("products/fetchAll", async (params) => {
    try {
        const response = await guestRequest.get("api/product/getall?" + (params || ""));
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
})
