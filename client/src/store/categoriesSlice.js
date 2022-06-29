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
    categories: [],
    category: {},
    error: null,
    status: "idle"
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        resetOneCategory(state, action) {
            state.category = {};
        }
    },
    extraReducers(builder) {
        builder
            // When fetched all categories
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.status = "idle";
            })
            .addCase(fetchCategories.pending, handlePending)
            .addCase(fetchCategories.rejected, handleError)

            // When fetched one category
            .addCase(fetchOneCategory.fulfilled, (state, action) => {
                state.category = action.payload;
                state.status = "idle";
            })
            .addCase(fetchOneCategory.pending, handlePending)
            .addCase(fetchOneCategory.rejected, handleError)
    }
});

export default categoriesSlice.reducer;

/*
  Selector creators
*/
export const selectCategory = state => state.categories.category;
export const selectCategories = state => state.categories.categories;
export const selectCategoriesError = state => state.categories.error;
export const selectCategoriesStatus = state => state.categories.status;

/*
  Action creators
*/
export const { resetOneCategory } = categoriesSlice.actions;

/*
  Thunk actions
*/
export const fetchCategories = createAsyncThunk("category/fetchAll", async () => {
    try {
        const response = await guestRequest.get("api/category/getall");
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});

export const fetchOneCategory = createAsyncThunk("category/fetchOne", async (id) => {
    try {
        const response = await guestRequest.get("api/category/getone/" + id);
        return response.data;
    } catch (err) {
        return Promise.reject(err.message);
    }
});