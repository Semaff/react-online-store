import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import userReducer from "./userSlice";
import testimonialsReducer from "./testimonialsSlice";
import basketReducer from "./basketSlice";
import orderReducer from "./orderSlice";
import brandsReducer from "./brandsSlice";
import ratingsReducer from "./ratingsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    testimonials: testimonialsReducer,
    basket: basketReducer,
    order: orderReducer,
    ratings: ratingsReducer,
  },
});

export default store;
