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
    testimonials: [],
    error: null,
    status: 'idle' // idle / loading / ?error
}

const testimonialsSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Fetched Testimonials
            .addCase(fetchTestimonials.fulfilled, (state, action) => {
                state.testimonials = action.payload;
                state.status = "idle";
            })
            .addCase(fetchTestimonials.pending, handlePending)
            .addCase(fetchTestimonials.rejected, handleError);
    }
});

export default testimonialsSlice.reducer;

/*
  Selector creators
*/
export const selectTestimonials = state => state.testimonials.testimonials;
export const selectTestimonialsError = state => state.testimonials.error;
export const selectTestimonialsStatus = state => state.testimonials.status;

/*
  Thunk actions
*/
export const fetchTestimonials = createAsyncThunk("testimonials/fetchTestimonials", async () => {
    try {
        const response = await guestRequest.get("api/testimonial/getall");
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
})