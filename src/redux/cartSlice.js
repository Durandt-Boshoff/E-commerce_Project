import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product =action.payload

            const existingItem = state.items.find(
                (item) => item.id === product.id
            )

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({
                    ...product,
                    quantity: 1,
                })
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        },

        increaseQty: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            )

            if (item) {
                item.quantity += 1
            }
        },

        decreaseQty: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            )

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.items = state.items.filter(
                        (cartItem) => cartItem.id !== action.payload
                    )
                }
            }
        },

        clearCart: (state) => {
            state.items = []
        },
    },
})

export const {
    addItem,
    removeItem,
    increaseQty,
    decreaseQty,
    clearCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartTotalQty = (state) => 
    state.cart.items.reduce(
        (total, item) => total + item.quantity,
        0
    )

export const selectCartTotalPrice = (state) =>
    state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

export default cartSlice.reducer