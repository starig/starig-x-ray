export type PhotosItem = {
    defaultUrl: string;
    aiUrl: string;
}

export type PhotoSliceState = {
    currentPhotoId: number,
    photos: PhotosItem[]
}