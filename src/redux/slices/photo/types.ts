export type PhotosItem = {
    defaultUrl: string;
    aiUrl: string;
}

export type PhotoSliceState = {
    currentPhotoId: number;
    photos: PhotosItem[];
    contrastValue: string;
    brightnessValue: string;
    invertValue: string;
}