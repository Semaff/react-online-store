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
    product: {},

    colors: [],
    sizes: [],

    error: null,
    status: 'idle' // idle / loading / ?error
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Fetched Products with query parameters
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = "idle";
            })
            .addCase(fetchProducts.pending, handlePending)
            .addCase(fetchProducts.rejected, handleError)

            // Fetched Products on a sale
            .addCase(fetchSaleProducts.fulfilled, (state, action) => {
                state.productsOnASale = action.payload;
                state.status = "idle";
            })
            .addCase(fetchSaleProducts.pending, handlePending)
            .addCase(fetchSaleProducts.rejected, handleError)

            // Fetched Products and then used their properties for filling colors and sizes
            .addCase(fetchParameters.fulfilled, (state, action) => {
                const products = action.payload.rows;
                let colors = [];
                let sizes = [];

                // Iterate through products and get their Colors and Sizes
                for (let i = 0; i < products; i++) {
                    products[i].colors.forEach(color => {
                        if (colors[color]) {
                            colors[color]++;
                        } else {
                            colors[color] = 1;
                        };
                    });

                    products[i].sizes.forEach(size => {
                        if (sizes[size]) {
                            sizes[size]++;
                        } else {
                            sizes[size] = 1;
                        };
                    });
                }

                state.colors = colors;
                state.sizes = sizes;
            })
            .addCase(fetchParameters.pending, handlePending)
            .addCase(fetchParameters.rejected, handleError)

            // Fetched one Product by its id
            .addCase(fetchOneProduct.fulfilled, (state, action) => {
                state.product = action.payload;
                state.status = "idle";
            })
            .addCase(fetchOneProduct.pending, handlePending)
            .addCase(fetchOneProduct.rejected, handleError);
    }
});

export default productsSlice.reducer;

/*
  Selector creators
*/
export const selectProductColors = state => state.products.colors;
export const selectProductSizes = state => state.products.sizes;

export const selectProducts = state => state.products.products;
export const selectSaleProducts = state => state.products.productsOnASale;

export const selectProductsError = state => state.products.error;
export const selectProductsStatus = state => state.products.status;

/*
  Thunk actions
*/
export const fetchParameters = createAsyncThunk("products/fetchParameters", async (params) => {
    try {
        const response = await guestRequest.get("api/product/getall?getall=true" + (params || ""));
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
})

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (params) => {
    try {
        const response = await guestRequest.get("api/product/getall?" + (params || ""));
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});

export const fetchSaleProducts = createAsyncThunk("products/fetchSaleProducts", async () => {
    try {
        const response = await guestRequest.get("api/product/getall?order=5");
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});

export const fetchOneProduct = createAsyncThunk("products/fetchOneProduct", async (id) => {
    try {
        const response = await guestRequest.get("api/product/getone/" + id);
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});
