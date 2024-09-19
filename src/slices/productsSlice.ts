import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/productTypes';
import { products as initialProducts } from '../data/productsData';

interface ProductsState {
  products: Product[];
  searchQuery: string;
}

const initialState: ProductsState = {
  products: initialProducts,
  searchQuery: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { setSearchQuery, setProducts, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
