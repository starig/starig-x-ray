import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    ],
    contrastValue: '100',
    brightnessValue: '100',
    invertValue: '0',
    photoSize: '100',
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
        },
        setContrast: (state, action: PayloadAction<string>) => {
            state.contrastValue = action.payload;
        },
        setBrightness: (state, action: PayloadAction<string>) => {
            state.brightnessValue = action.payload
        },
        handleInvert: (state) => {
            state.invertValue === '1' ? state.invertValue = '0' : state.invertValue = '1';
        },
        photoSizePlus: (state) => {
            let sizeValue: number = Number(state.photoSize);
            if (sizeValue < 200) {
                sizeValue += 20;
            }
            state.photoSize = sizeValue.toString();
        },
        photoSizeMinus: (state) => {
            let sizeValue: number = Number(state.photoSize);
            if (sizeValue > 100) {
                sizeValue -= 20;
            }
            state.photoSize = sizeValue.toString();
        }
    }
});

export const {
    increment,
    decrement,
    setContrast,
    setBrightness,
    handleInvert,
    photoSizePlus,
    photoSizeMinus
} = photoSlice.actions;

export default photoSlice.reducer;