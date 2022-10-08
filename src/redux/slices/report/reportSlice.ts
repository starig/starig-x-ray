import {ReportStatus} from "./types";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    status: ReportStatus.EDITING,
}

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {}
})

export default reportSlice.reducer