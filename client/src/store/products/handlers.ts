import { AnyAction } from "@reduxjs/toolkit";
import { ProductsState } from ".";

type ProductHandler = (state: ProductsState, action: AnyAction) => ProductsState;

export const handleError: ProductHandler = (state, action) => {
  return {
    ...state,
    status: "ERROR",
  };
};

export const handleLoading: ProductHandler = (state) => {
  return {
    ...state,
    status: "LOADING",
  };
};
