import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authRequest, guestRequest } from "../http/requests";
import { fetchOneProduct } from "./productsSlice";

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
    productRatings: {},
    error: null,
    status: 'idle' // idle / loading / ?error
}

const ratingSlice = createSlice({
    name: "ratings",
    initialState,
    reducers: {
        removeRatingError(state, action) {
            state.error = null;
            state.status = "idle";
        }
    },
    extraReducers(builder) {
        builder
            // Fetched Product's rating
            .addCase(fetchProductRating.fulfilled, (state, action) => {
                state.productRatings = action.payload;
                state.status = "idle";
            })
            .addCase(fetchProductRating.pending, handlePending)
            .addCase(fetchProductRating.rejected, handleError)

            .addCase(rateProduct.rejected, handleError);
    }
});

export default ratingSlice.reducer;

/*
  Selector creators
*/
export const selectProductRatings = state => state.ratings.productRatings;
export const selectRatingsError = state => state.ratings.error;
export const selectRatingsStatus = state => state.ratings.status;

/*
  Action creators
*/
export const { removeRatingError } = ratingSlice.actions

/*
  Thunk actions
*/
export const fetchProductRating = createAsyncThunk("ratings/fetchProductRating", async ({ id, params }) => {
    try {
        const response = await guestRequest.get("api/rating/" + id + "?" + params);
        return response.data;
    } catch (err) {
        return Promise.reject(err.response.data);
    }
});

export const rateProduct = createAsyncThunk("ratings/rateProduct", async ({ productId, name, description, rate }, { dispatch }) => {
    try {
        const response = await authRequest.post("api/rating/" + productId + "/rate/" + rate, { name, description });
        await dispatch(fetchProductRating(productId));
        await dispatch(fetchOneProduct(productId));
        return response.data;
    } catch (err) {
        return Promise.reject(err.response.data);
    }
});