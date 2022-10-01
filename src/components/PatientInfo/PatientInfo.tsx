import React, {FC} from 'react';
import styles from "./PatientInfo.module.scss";
import {AiOutlineStar} from "react-icons/ai";

const PatientInfo: FC = () => (
    <table className={styles.patientInfo}>
        <thead className={styles.infoHeader}>
        <tr>
            <th>fav</th>
            <th>patient id</th>
            <th>firt name</th>
            <th>last name</th>
            <th>gender</th>
            <th>age</th>
            <th>dob</th>
            <th>dox</th>
            <th>ab.prob</th>
            <th>status</th>
        </tr>
        </thead>
        <tbody className={styles.infoBody}>
        <tr>
            <th>
                <AiOutlineStar />
            </th>
            <th>77</th>
            <th className={styles.bodyItemBold}>Ivan</th>
            <th className={styles.bodyItemBold}>Starkov</th>
            <th>Male</th>
            <th>20</th>
            <th>07/07/2002</th>
            <th>01/15/2022</th>
            <th className={styles.bodyItemBold}>
                <div className={styles.bodyItemRed}>
                    Abnormality: 70%
                </div>
            </th>
            <th>Approved</th>
        </tr>
        </tbody>
    </table>
);

export default PatientInfo;