import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart.items));
  } catch (e) {
    console.error('Could not save cart to storage', e);
  }
});

export default store