import React, {FC, useEffect, useRef, useState} from 'react';
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
import ContrastPopup from "../ContrastPopup/ContrastPopup";
import Ruler from "../Ruler/Ruler";
import PanImage from "../PanImage/PanImage";

export type PopupClick = MouseEvent & {
    path: Node[];
}


const XrayPhoto: FC = () => {
    const {status} = useSelector((state: RootState) => state.xray);
    const {
        photos,
        currentPhotoId,
        contrastValue,
        brightnessValue,
        invertValue
    } = useSelector((state: RootState) => state.photo);

    const [currentPhoto, setCurrentPhoto] = useState<string>(photos[currentPhotoId].defaultUrl);

    const [isAi, setIsAi] = useState<boolean>(false);

    const [contrastPopupStatus, setContrastPopupStatus] = useState<boolean>(false);
    const [contrastPhotoValue, setContrastPhotoValue] = useState<string>(contrastValue);
    const [brightnessPhotoValue, setBrightnessPhotoValue] = useState<string>(brightnessValue);

    const [arrowPopupStatus, setArrowPopupStatus] = useState<boolean>(false);
    const [rulerStatus, setRulerStatus] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const photoRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        setContrastPhotoValue(contrastValue);
    }, [contrastValue]);

    useEffect(() => {
        setBrightnessPhotoValue(brightnessValue);
    }, [brightnessValue]);

    //Outside click watcher

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;

            if ((ref.current && !_event.path.includes(ref.current))
                && (buttonRef.current && !_event.path.includes(buttonRef.current))) {
                setContrastPopupStatus(false);
            }
        }

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={styles.xrayPhoto}>
            <div className={styles.xrayPhotoButtons}>
                <button className={styles.arrowIcon} onClick={prevPhoto} disabled={currentPhotoId === 0}>
                    <AiOutlineLeft/>
                </button>
                <div className={styles.xrayPhotoEditButtons} ref={buttonRef}>
                    <XrayIcon url={ArrowIcon} alt={'Arrow'} status={arrowPopupStatus}
                              handleStatus={setArrowPopupStatus}/>
                    <XrayIcon url={LungIcon} alt={'Lung'} status={isAi} handleStatus={setIsAi}/>
                    <XrayIcon url={RulerIcon} alt={'Ruler'} status={rulerStatus} handleStatus={setRulerStatus}/>
                    <XrayIcon url={ContrastIcon} alt={'Contrast'}
                              status={contrastPopupStatus} handleStatus={setContrastPopupStatus}/>
                </div>
                <button className={styles.arrowIcon} onClick={nextPhoto}
                        disabled={currentPhotoId === photos.length - 1}>
                    <AiOutlineRight/>
                </button>
            </div>
            <div className={styles.xrayPhotoWrapper}>
                {
                    contrastPopupStatus && <div ref={ref}>
                        <ContrastPopup/>
                    </div>
                }
                {
                    status === 'loading' ? <XrayPhotoLoader/> : <div className={styles.xrayPhotoImage}
                                                                     ref={photoRef}>
                        {
                            rulerStatus && <Ruler />
                        }
                        {
                            arrowPopupStatus ? <PanImage imgSrc={currentPhoto}
                                                         brightness={brightnessValue}
                                                         contrast={contrastValue}
                                                         invert={invertValue}/>:
                                <img src={currentPhoto} alt={'x-ray'} style={
                                    {
                                        maxWidth: '100%',
                                        filter: `contrast(${contrastPhotoValue}%) 
                                                                             brightness(${brightnessPhotoValue}%) 
                                                                             invert(${invertValue})`
                                    }
                                }/>
                        }
                    </div>
                }
            </div>
        </div>
    )
};

export default XrayPhoto;