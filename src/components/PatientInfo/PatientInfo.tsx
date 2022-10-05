import React, {FC} from 'react';
import styles from "./PatientInfo.module.scss";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";


const PatientInfo: FC = () => {

    const { data } = useSelector((state: RootState) => state.xray);

    const { id, status, gender, dox, ab_prob, dob, age, is_favorite, last_name, first_name} = data[0];


    const parseDate = (value: string) => {
        const date = new Date(value);

        let day: string | number = date.getDate();
        let month: string | number = date.getMonth();
        const year: number = date.getFullYear();

        if (day < 10) {
            day = `0${day}`
        }
        if (month < 10) {
            month = `0${month}`
        }

        return `${month}/${day}/${year}`
    }

    const dobParsed = parseDate(dob);
    const doxParsed = parseDate(dox);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerItem}>fav</div>
                <div className={styles.headerItem}>patient id</div>
                <div className={styles.headerItem}>first name</div>
                <div className={styles.headerItem}>last name</div>
                <div className={styles.headerItem}>gender</div>
                <div className={styles.headerItem}>age</div>
                <div className={styles.headerItem}>dob</div>
                <div className={styles.headerItem}>dox</div>
                <div className={styles.headerItem}>ab.prob</div>
                <div className={styles.headerItem}>status</div>
            </div>
            <div className={styles.body}>
                <div className={styles.bodyFav}>
                    {
                        is_favorite ? <AiFillStar /> : <AiOutlineStar />
                    }
                </div>
                <div>{id}</div>
                <div className={styles.bodyBoldItem}>{first_name}</div>
                <div className={styles.bodyBoldItem}>{last_name}</div>
                <div>{gender}</div>
                <div>{age}</div>
                <div>{dobParsed}</div>
                <div>{doxParsed}</div>
                <div className={styles.bodyBoldItem}>
                    <div className={styles.abProb}>
                        Abnormality: {ab_prob}%
                    </div>
                </div>
                <div>{status}</div>
            </div>
        </div>
    )
}

export default PatientInfo;