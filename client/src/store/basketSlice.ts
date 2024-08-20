import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authRequest } from "../http/requests";

const handleFulfilled = (state, action) => {
  action.payload.products.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const basketFavouriteIds = action.payload.favourites.map((product) => product.id);

  return {
    ...state,
    basket: action.payload,
    basketFavouriteIds: basketFavouriteIds,
    status: "idle",
  };
};

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
  basket: {},
  basketFavouriteIds: [],
  basketTotal: 0,
  basketCoupon: null,
  error: null,
  status: "idle", // idle / loading / ?error
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addedBasketCoupon(state, action) {
      state.basketCoupon = action.payload;
    },

    removedBasketCoupon(state, action) {
      state.basketCoupon = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBasket.fulfilled, handleFulfilled)
      .addCase(toggleFavouriteProduct.fulfilled, handleFulfilled)
      .addCase(appendProduct.fulfilled, handleFulfilled)
      .addCase(incrementProduct.fulfilled, handleFulfilled)
      .addCase(decrementProduct.fulfilled, handleFulfilled)
      .addCase(removeProductFromBasket.fulfilled, handleFulfilled)
      .addCase(clearBasket.fulfilled, handleFulfilled)

      .addCase(fetchBasket.pending, handlePending)
      .addCase(toggleFavouriteProduct.pending, handlePending)
      .addCase(appendProduct.pending, handlePending)
      .addCase(incrementProduct.pending, handlePending)
      .addCase(decrementProduct.pending, handlePending)
      .addCase(removeProductFromBasket.pending, handlePending)
      .addCase(clearBasket.pending, handlePending)

      .addCase(fetchBasket.rejected, handleError)
      .addCase(toggleFavouriteProduct.rejected, handleError)
      .addCase(appendProduct.rejected, handleError)
      .addCase(incrementProduct.rejected, handleError)
      .addCase(decrementProduct.rejected, handleError)
      .addCase(removeProductFromBasket.rejected, handleError)
      .addCase(clearBasket.rejected, handleError);
  },
});

export default basketSlice.reducer;

/*
  Selector creators
*/
export const selectBasket = (state) => state.basket.basket;
export const selectBasketCoupon = (state) => state.basket.basketCoupon;
export const selectBasketProducts = (state) => state.basket.basket.products;
export const selectBasketFavouriteIds = (state) => state.basket.basketFavouriteIds;
export const selectBasketError = (state) => state.basket.error;
export const selectBasketStatus = (state) => state.basket.status;

/*
  Action creators
*/
export const { addedBasketCoupon, removedBasketCoupon } = basketSlice.actions;

/*
  Thunk actions
*/
export const fetchBasket = createAsyncThunk("basket/fetchOne", async () => {
  try {
    const response = await authRequest.get("api/basket/getone");
    return response.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

export const toggleFavouriteProduct = createAsyncThunk(
  "basket/toggleFavourite",
  async (productId) => {
    try {
      const response = await authRequest.put("api/basket/favourite/" + productId);
      return response.data;
    } catch (err) {
      return Promise.reject(err.message);
    }
  },
);

export const appendProduct = createAsyncThunk(
  "basket/appendProduct",
  async ({ productId, quantity }) => {
    try {
      const response = await authRequest.put("api/basket/append/" + productId + "/" + quantity);
      return response.data;
    } catch (err) {
      return Promise.reject(err.message);
    }
  },
);

export const incrementProduct = createAsyncThunk(
  "basket/incrementProduct",
  async ({ productId, quantity }) => {
    try {
      const response = await authRequest.put("api/basket/increment/" + productId + "/" + quantity);
      return response.data;
    } catch (err) {
      return Promise.reject(err.message);
    }
  },
);

export const decrementProduct = createAsyncThunk(
  "basket/decrementProduct",
  async ({ productId, quantity }) => {
    try {
      const response = await authRequest.put("api/basket/decrement/" + productId + "/" + quantity);
      return response.data;
    } catch (err) {
      return Promise.reject(err.message);
    }
  },
);

export const removeProductFromBasket = createAsyncThunk(
  "basket/removeProduct",
  async (productId) => {
    try {
      const response = await authRequest.put("api/basket/remove/" + productId);
      return response.data;
    } catch (err) {
      return Promise.reject(err.message);
    }
  },
);

export const clearBasket = createAsyncThunk("basket/clear", async () => {
  try {
    const response = await authRequest.put("api/basket/clear");
    return response.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
});
