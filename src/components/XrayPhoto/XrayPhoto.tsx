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
import {nextPhoto, prevPhoto} from "../../redux/slices/photo/photoSlice";
import XrayIcon from "../XrayIcon/XrayIcon";
import ContrastPopup from "../ContrastPopup/ContrastPopup";
import Ruler from "../Ruler/Ruler";
import PanImage from "../PanImage/PanImage";
import RulerTest from "../rulerTest/RulerTest";

type PopupClick = MouseEvent & {
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

    const [arrowPopupStatus, setArrowPopupStatus] = useState<boolean>(false);
    const [rulerStatus, setRulerStatus] = useState<boolean>(false);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const photoRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch<AppDispatch>();

    const changePhotoPlus = () => {
        if (currentPhotoId !== photos.length - 1) {
            dispatch(nextPhoto());
        }
    }

    const changePhotoMinus = () => {
        if (currentPhotoId >= 0) {
            dispatch(prevPhoto());
        }
    }

    useEffect(() => {
        if (isAi) {
            setCurrentPhoto(photos[currentPhotoId].aiUrl);
        } else {
            setCurrentPhoto(photos[currentPhotoId].defaultUrl);
        }
    }, [currentPhotoId, isAi]);

    //Outside click watcher

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;

            if ((wrapperRef.current && !_event.path.includes(wrapperRef.current))
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
                <button className={styles.arrowIcon} onClick={changePhotoMinus} disabled={currentPhotoId === 0}>
                    <AiOutlineLeft/>
                </button>
                <div className={styles.xrayPhotoEditButtons} ref={buttonRef}>
                    <XrayIcon url={ArrowIcon} alt={'Arrow'} status={arrowPopupStatus}
                              handleStatus={setArrowPopupStatus}/>
                    <XrayIcon url={LungIcon} alt={'Lung'} status={isAi} handleStatus={setIsAi}/>
                    <div onClick={() => {
                        if (!rulerStatus) {
                            window.scroll(0, 260)
                        }
                    }}>
                        <XrayIcon url={RulerIcon} alt={'Ruler'} status={rulerStatus} handleStatus={setRulerStatus}/>
                    </div>
                    <XrayIcon url={ContrastIcon} alt={'Contrast'}
                              status={contrastPopupStatus} handleStatus={setContrastPopupStatus}/>
                </div>
                <button className={styles.arrowIcon} onClick={changePhotoPlus}
                        disabled={currentPhotoId === photos.length - 1}>
                    <AiOutlineRight/>
                </button>
            </div>
            <div className={styles.xrayPhotoWrapper}>
                {
                    contrastPopupStatus && <div ref={wrapperRef}>
                        <ContrastPopup/>
                    </div>
                }
                {
                    status === 'loading' ? <XrayPhotoLoader/> : <div className={styles.xrayPhotoImage}
                                                                     ref={photoRef}>
                        {
                            rulerStatus && <RulerTest />
                        }
                        {
                            arrowPopupStatus ? <PanImage imgSrc={currentPhoto}
                                                         brightness={brightnessValue}
                                                         contrast={contrastValue}
                                                         invert={invertValue}/>:
                                <img src={currentPhoto} alt={'x-ray'} style={
                                    {
                                        maxWidth: '100%',
                                        filter: `contrast(${contrastValue}%) 
                                                                             brightness(${brightnessValue}%) 
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