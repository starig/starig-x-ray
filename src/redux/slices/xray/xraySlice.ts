import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchXrayData} from "../../actions";
import {Status, XrayDataItem, XrayDataState} from "./types";




const initialState: XrayDataState = {
    data: [],
    status: Status.LOADING,
}


export const xraySlice = createSlice({
    name: 'xray',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchXrayData.fulfilled, (state, action: PayloadAction<XrayDataItem[]>) => {
            state.status = Status.SUCCESS;
            state.data = action.payload
        });
        builder.addCase(fetchXrayData.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(fetchXrayData.rejected, (state) => {
            state.status = Status.ERROR;
        })
    }
})


export default xraySlice.reducer