import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import userReducer from "./userSlice";
import testimonialsReducer from "./testimonialsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        categories: categoriesReducer,
        testimonials: testimonialsReducer
    }
});

export default store;