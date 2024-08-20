import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authRequest, guestRequest } from "../http/requests";

const handleError = (state, action) => {
  return {
    ...state,
    error: action.error,
    status: "error",
  };
};

const handlePending = (state, action) => {
  return {
    ...state,
    error: null,
    status: "pending",
  };
};

/*
  Reducer
*/
const initialState = {
  brands: [],
  brand: {},
  error: null,
  status: "idle",
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    resetOneBrand(state, action) {
      state.brand = {};
    },
  },
  extraReducers(builder) {
    builder
      // When fetched all brands
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload.sort((a, b) => a.id - b.id);
        state.status = "idle";
      })
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.rejected, handleError)

      // When fetched one brand
      .addCase(fetchOneBrand.fulfilled, (state, action) => {
        state.brand = action.payload;
        state.status = "idle";
      })
      .addCase(fetchOneBrand.pending, handlePending)
      .addCase(fetchOneBrand.rejected, handleError);
  },
});

export default brandsSlice.reducer;

/*
  Selector creators
*/
export const selectBrand = (state) => state.brands.brand;
export const selectBrands = (state) => state.brands.brands;
export const selectBrandsError = (state) => state.brands.error;
export const selectBrandsStatus = (state) => state.brands.status;

/*
  Action creators
*/
export const { resetOneBrand } = brandsSlice.actions;

/*
  Thunk actions
*/
export const fetchBrands = createAsyncThunk("brand/fetchAll", async () => {
  try {
    const response = await guestRequest.get("api/brand/getall");
    return response.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

export const fetchOneBrand = createAsyncThunk("brand/fetchOne", async (id) => {
  try {
    const response = await guestRequest.get("api/brand/getone/" + id);
    return response.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

export const createBrand = createAsyncThunk("brand/createOne", async ({ name }) => {
  try {
    const response = await authRequest.post("api/brand/create", { name });
    return response.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

export const updateBrand = createAsyncThunk("brand/updateOne", async ({ id, name }) => {
  try {
    const response = await authRequest.put("api/brand/update/" + id, { name });
    return response.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

export const deleteBrand = createAsyncThunk("brand/deleteOne", async (id) => {
  try {
    const response = await authRequest.delete("api/brand/delete/" + id);
    return response.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
});
