import React, {FC, useState} from 'react';
import styles from './ContrastPopup.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {handleInvert, setBrightness, setContrast} from "../../redux/slices/photo/photoSlice";


const ContrastPopup: FC = () => {

    const {contrastValue, brightnessValue} = useSelector((state: RootState) => state.photo);
    const dispatch = useDispatch<AppDispatch>();
    const [invertStatus, setInvertStatus] = useState<boolean>(false);

    const invertPhoto = () => {
        dispatch(handleInvert());
        setInvertStatus(!invertStatus);
    }

    return (

        <div className={styles.contrastPopup}>
            <div className={styles.popupSlider}>
                <div className={styles.popupSliderTitle}>Contrast</div>
                <input className={styles.popupSliderInput} type={'range'}
                       value={contrastValue}
                       onChange={(e) => (dispatch(setContrast(e.target.value)))}/>
            </div>
            <div className={styles.popupSlider}>
                <div className={styles.popupSliderTitle}>Brightness</div>
                <input className={styles.popupSliderInput} type={'range'}
                       value={brightnessValue}
                       onChange={(e) => (dispatch(setBrightness(e.target.value)))}/>
            </div>
            <div className={styles.popupSlider}>
                <div className={styles.popupSliderTitle}>Invert</div>
                <label className={styles.switch}>
                    <input type="checkbox" checked={invertStatus} onChange={invertPhoto}/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
            </div>
        </div>
    )
};

export default ContrastPopup;