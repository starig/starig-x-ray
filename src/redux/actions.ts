import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {XrayDataItem} from "./slices/xray/types";

export const fetchXrayData = createAsyncThunk<XrayDataItem[]>(
    'xray/fetchXrayStatus',
    async () => {
            const { data } = await axios.get<XrayDataItem[]>('https://633a3a1f471b8c39556acf4c.mockapi.io/xray');
            return data
     }
)