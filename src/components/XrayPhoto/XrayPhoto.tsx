import React from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import styles from './XrayPhoto.module.scss';
import ArrowIcon from './../../assets/icons/arrow.svg';
import LungIcon from './../../assets/icons/lung.svg';
import RulerIcon from './../../assets/icons/ruler.svg';
import ContrastIcon from './../../assets/icons/contrast.svg';
import Xray from './../../assets/img/xrayImg.jpg';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import XrayPhotoLoader from "../Skeletons/XrayPhotoLoader";

const XrayPhoto = () => {
    const { status } = useSelector((state: RootState) => state.xray);

    return (
        <div className={styles.xrayPhoto}>
            <div className={styles.xrayPhotoButtons}>
                <AiOutlineLeft cursor={'pointer'}/>
                <div className={styles.xrayPhotoEditButtons}>
                    <img className={styles.xrayIcon} src={ArrowIcon} alt={'Arrow icon'} />
                    <img className={styles.xrayIcon} src={LungIcon} alt={'Arrow icon'} />
                    <img className={styles.xrayIcon} src={RulerIcon} alt={'Arrow icon'} />
                    <img className={styles.xrayIcon} src={ContrastIcon} alt={'Arrow icon'} />
                </div>
                <AiOutlineRight cursor={'pointer'}/>
            </div>
            <div className={styles.xrayPhotoImage}>
                {
                    status === 'loading' ? <XrayPhotoLoader /> : <img src={Xray} alt={'x-ray'} />
                }
            </div>
        </div>
    )
};

export default XrayPhoto;