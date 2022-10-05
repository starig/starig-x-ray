import React, {FC, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
//@ts-ignore
import {useGesture} from "react-use-gesture";

const PanTest: FC = () => {
    const [crop, setCrop] = useState<{x: number, y: number}>({x: 0, y: 0})
    const {
        photos,
        currentPhotoId
    } = useSelector((state: RootState) => state.photo);
    const [currentPhoto, setCurrentPhoto] = useState<string>(photos[currentPhotoId].defaultUrl);
    const imageRef = useRef<any>()

    useGesture({
        //@ts-ignore
         onDrag: ({ offset: [dx, dy] }) => {
             setCrop({x: dx, y: dy})
             console.log(crop)
         }
    }, {
        domTarget: imageRef,
    })

    return (
        <div>
            <img src={currentPhoto}
                 alt={'x-ray'}
                 style={{
                     top: crop.y,
                     left: crop.x,
                 }}
                 ref={imageRef} />
        </div>
    )
};

export default PanTest;