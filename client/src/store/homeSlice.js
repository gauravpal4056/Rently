import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'home',
    initialState:{
        cart:{items:[]},
        wish:{items:[]},
        user:{},
        query:{},
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.items = action.payload
        },
        addToWish: (state, action) => {
            state.wish.items = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setQuery: (state, action) => {
            state.query = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, addToWish, setUser, setQuery } = counterSlice.actions

export default counterSlice.reducer