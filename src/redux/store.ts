import { configureStore } from '@reduxjs/toolkit'
import xraySlice from "./slices/xray/xraySlice";
import photoSlice from "./slices/photo/photoSlice";
import reportSlice from "./slices/report/reportSlice";

export const store = configureStore({
    reducer: {
        xray: xraySlice,
        photo: photoSlice,
        report: reportSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch