import React, {FC, useEffect, useState} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import styles from './XrayPhoto.module.scss';
import ArrowIcon from './../../assets/icons/arrow.svg';
import LungIcon from './../../assets/icons/lung.svg';
import RulerIcon from './../../assets/icons/ruler.svg';
import ContrastIcon from './../../assets/icons/contrast.svg';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import XrayPhotoLoader from "../Skeletons/XrayPhotoLoader";
import {decrement, increment} from "../../redux/slices/photo/photoSlice";
import XrayIcon from "../XrayIcon/XrayIcon";

const XrayPhoto: FC = () => {
    const { status } = useSelector((state: RootState) => state.xray);
    const { photos, currentPhotoId } = useSelector((state: RootState) => state.photo);
    const [currentPhoto, setCurrentPhoto] = useState<string>(photos[currentPhotoId].defaultUrl);
    const [isAi, setIsAi] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    const nextPhoto = () => {
        if (currentPhotoId !== photos.length - 1) {
            dispatch(increment());
        }
    }

    const prevPhoto = () => {
        if (currentPhotoId >= 0) {
            dispatch(decrement());
        }
    }

    useEffect(() => {
        if (isAi) {
            setCurrentPhoto(photos[currentPhotoId].aiUrl);
        } else {
            setCurrentPhoto(photos[currentPhotoId].defaultUrl);
        }
    }, [currentPhotoId, isAi]);

    return (
        <div className={styles.xrayPhoto}>
            <div className={styles.xrayPhotoButtons}>
                <button className={styles.arrowIcon} onClick={prevPhoto} disabled={currentPhotoId === 0}>
                    <AiOutlineLeft />
                </button>
                <div className={styles.xrayPhotoEditButtons}>
                    <XrayIcon url={ArrowIcon} alt={'Arrow'} />
                    <XrayIcon url={LungIcon} alt={'Lung'} isAi={isAi} handleAi={setIsAi}/>
                    <XrayIcon url={RulerIcon} alt={'Ruler'} />
                    <XrayIcon url={ContrastIcon} alt={'Contrast'} />
                </div>
                <button className={styles.arrowIcon} onClick={nextPhoto} disabled={currentPhotoId === photos.length - 1}>
                    <AiOutlineRight />
                </button>
            </div>
            <div className={styles.xrayPhotoImage}>
                {
                    status === 'loading' ? <XrayPhotoLoader /> : <img src={currentPhoto} alt={'x-ray'} />
                }
            </div>
        </div>
    )
};

export default XrayPhoto;