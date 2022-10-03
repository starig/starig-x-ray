import { configureStore } from '@reduxjs/toolkit'
import xraySlice from "./slices/xray/xraySlice";
import photoSlice from "./slices/photo/photoSlice";

export const store = configureStore({
    reducer: {
        xray: xraySlice,
        photo: photoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch