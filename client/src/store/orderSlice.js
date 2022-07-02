import { createSlice } from "@reduxjs/toolkit"

/*
  Reducer
*/
const initialState = {
    orderPresets: {},
    error: null,
    status: 'idle' // idle / loading / ?error
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderPresets(state, action) {
            state.orderPresets = action.payload;
        },

        removeOrderPresets(state, action) {
            state.orderPresets = {};
        }
    },
});

export default orderSlice.reducer;

/*
  Selector creators
*/
export const selectOrderPresets = state => state.order.orderPresets;

/*
  Action creators
*/
export const { setOrderPresets, removeOrderPresets } = orderSlice.actions;