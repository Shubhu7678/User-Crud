
import userReducer from './slices/userSlice.jsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        user : userReducer,
    }
})

export default store