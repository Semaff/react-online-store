import { authRequest, guestRequest } from "@http/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductDTO, UpdateProductDTO } from "@typings/product";
import parseError from "utils/parseError";

/* =======================
  Fetch
  ===================== */
export const fetchParameters = createAsyncThunk(
  "products/fetchParameters",
  async (params: string) => {
    try {
      const response = await guestRequest.get("api/product/getall?getall=true" + (params || ""));
      return response.data;
    } catch (err) {
      return Promise.reject(parseError(err));
    }
  },
);

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (params: string) => {
  try {
    const response = await guestRequest.get("api/product/getall?" + (params || ""));
    return response.data;
  } catch (err) {
    return Promise.reject(parseError(err));
  }
});

export const fetchSaleProducts = createAsyncThunk("products/fetchSaleProducts", async () => {
  try {
    const response = await guestRequest.get("api/product/getall?order=5");
    return response.data;
  } catch (err) {
    return Promise.reject(parseError(err));
  }
});

export const fetchOneProduct = createAsyncThunk("products/fetchOneProduct", async (id: string) => {
  try {
    const response = await guestRequest.get("api/product/getone/" + id);
    return response.data;
  } catch (err) {
    return Promise.reject(parseError(err));
  }
});

/* ========================
  Product Actions
  =================== */
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product: ProductDTO) => {
    try {
      const response = await authRequest.post("api/product/create", product);
      return response.data;
    } catch (err) {
      return Promise.reject(parseError(err));
    }
  },
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }: UpdateProductDTO) => {
    try {
      const response = await authRequest.put("api/product/update/" + id, product);
      return response.data;
    } catch (err) {
      return Promise.reject(parseError(err));
    }
  },
);

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id: string) => {
  try {
    const response = await authRequest.delete("api/product/delete/" + id);
    return response.data;
  } catch (err) {
    return Promise.reject(parseError(err));
  }
});
