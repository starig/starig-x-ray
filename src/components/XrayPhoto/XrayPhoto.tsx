import React, {FC} from 'react';
import styles from "./XrayPhoto.module.scss";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import ArrowIcon from "../../assets/icons/arrow.svg";
import LungIcon from "../../assets/icons/lung.svg";
import RulerIcon from "../../assets/icons/ruler.svg";
import ContrastIcon from "../../assets/icons/contrast.svg";
import Xray from './../../assets/icons/xrayImg.jpg';

const XrayPhoto: FC = () => (
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
            <img src={Xray} alt={'x-ray'} />
        </div>
    </div>
);

export default XrayPhoto;