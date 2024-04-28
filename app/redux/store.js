import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../ui/slices/authSlice'
import { apiSlice } from '../ui/slices/apiSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

export default store;