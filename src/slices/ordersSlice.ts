import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderDescriptionTypes } from '../types/OrderTypes';
import { orders as initialOrders } from '../data/ordersData';

interface OrdersState {
  orders: OrderDescriptionTypes[];
}

const initialState: OrdersState = {
  orders: initialOrders,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<OrderDescriptionTypes[]>) {
      state.orders = action.payload;
    },
    deleteOrder(state, action: PayloadAction<number>) {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const { setOrders, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
