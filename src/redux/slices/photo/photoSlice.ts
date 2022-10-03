import {createSlice} from "@reduxjs/toolkit";
import photo1 from './../../../assets/img/xrayImg.jpg';
import photo1_ai from './../../../assets/img/xrayImg-ai.jpg';
import photo2 from './../../../assets/img/xrayImg-2.jpg';
import photo2_ai from './../../../assets/img/xrayImg-2-ai.jpg';
import {PhotoSliceState} from "./types";


const initialState: PhotoSliceState = {
    currentPhotoId: 0,
    photos: [
        {
            "defaultUrl": photo1,
            "aiUrl": photo1_ai,
        },
        {
            "defaultUrl": photo2,
            "aiUrl": photo2_ai,
        },
    ]
}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        increment: (state) => {
            state.currentPhotoId++
        },
        decrement: (state) => {
            state.currentPhotoId--
        }
    }
});

export const { increment, decrement } = photoSlice.actions;

export default photoSlice.reducer;