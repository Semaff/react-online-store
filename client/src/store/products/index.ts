import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Product } from "@typings/product";
import { Status } from "@typings/status";
import { fetchOneProduct, fetchParameters, fetchProducts, fetchSaleProducts } from "./thunks";
import { handleError, handleLoading } from "./handlers";

export interface ProductsState {
  products: Product | null;
  productsOnASale: Product | null;
  product: Product | null;

  colors: number[];
  sizes: number[];
  minPrice: number;
  maxPrice: number;

  status: Status;
}

/* Reducer */
const initialState: ProductsState = {
  products: null,
  productsOnASale: null,
  product: null,

  colors: [],
  sizes: [],
  minPrice: 1,
  maxPrice: 1,

  status: "IDLE",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "IDLE";
      })
      .addCase(fetchProducts.pending, handleLoading)
      .addCase(fetchProducts.rejected, handleError)

      .addCase(fetchSaleProducts.fulfilled, (state, action) => {
        state.productsOnASale = action.payload;
        state.status = "IDLE";
      })
      .addCase(fetchSaleProducts.pending, handleLoading)
      .addCase(fetchSaleProducts.rejected, handleError)

      .addCase(fetchParameters.fulfilled, (state, action) => {
        const products = action.payload.rows;

        let colors: number[] = [];
        let sizes: number[] = [];
        let minPrice = 1;
        let maxPrice = 1;

        /* Iterate through products and get their COLORS/SIZES */
        for (let i = 0; i < products.length; i++) {
          products[i].colors.forEach((color: number) => {
            if (colors[color]) {
              colors[color]++;
            } else {
              colors[color] = 1;
            }
          });

          products[i].sizes.forEach((size: number) => {
            if (sizes[size]) {
              sizes[size]++;
            } else {
              sizes[size] = 1;
            }
          });

          maxPrice = Math.max(products[i].price, maxPrice);
        }

        state.colors = colors;
        state.sizes = sizes;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
      })
      .addCase(fetchParameters.pending, handleLoading)
      .addCase(fetchParameters.rejected, handleError)

      .addCase(fetchOneProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "IDLE";
      })
      .addCase(fetchOneProduct.pending, handleLoading)
      .addCase(fetchOneProduct.rejected, handleError);
  },
});

export default productsSlice.reducer;

/* Selectors */
export const selectProductColors = (state: RootState) => state.products.colors;
export const selectProductSizes = (state: RootState) => state.products.sizes;

export const selectProductsMinPrice = (state: RootState) => state.products.minPrice;
export const selectProductsMaxPrice = (state: RootState) => state.products.maxPrice;

export const selectProduct = (state: RootState) => state.products.product;
export const selectProducts = (state: RootState) => state.products.products;
export const selectSaleProducts = (state: RootState) => state.products.productsOnASale;

export const selectProductsStatus = (state: RootState) => state.products.status;
