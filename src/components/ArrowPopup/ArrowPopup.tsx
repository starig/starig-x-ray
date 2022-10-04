import React, {FC} from 'react';
import styles from './ArrowPopup.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {photoSizeMinus, photoSizePlus} from "../../redux/slices/photo/photoSlice";


const ArrowPopup: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { photoSize } = useSelector((state: RootState) => state.photo)

    const sizePlus = () => {
        dispatch(photoSizePlus());
    }

    const sizeMinus = () => {
        dispatch(photoSizeMinus())
    }

    return (
        <div className={styles.arrowPopup}>
            <button className={`${styles.arrowPopupButton} ${styles.minusButton}`}
                    onClick={sizeMinus}
                    disabled={photoSize === '100'}>-</button>
            <button className={`${styles.arrowPopupButton} ${styles.plusButton}`}
                    onClick={sizePlus}
                    disabled={photoSize === '200'}>+</button>
        </div>
    )
};

export default ArrowPopup;