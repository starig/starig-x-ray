import { configureStore } from '@reduxjs/toolkit'
import xraySlice from "./slices/xray/xraySlice";

export const store = configureStore({
    reducer: {
        xray: xraySlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch