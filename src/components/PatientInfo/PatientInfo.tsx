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
                <th className={styles.bodyItemBold}>
                    {
                        is_favorite ?<AiFillStar size={24} color={'#EAB632'}/> : <AiOutlineStar size={24}/>
                    }

                </th>
                <th>{ id }</th>
                <th className={styles.bodyItemBold}>{ first_name }</th>
                <th className={styles.bodyItemBold}>{ last_name }</th>
                <th>{ gender }</th>
                <th>{ age }</th>
                <th>{ dobParsed }</th>
                <th>{ doxParsed }</th>
                <th className={styles.bodyItemBold}>
                    <div className={styles.bodyItemRed}>
                        Abnormality: { ab_prob }%
                    </div>
                </th>
                <th>{ status }</th>
            </tr>
            </tbody>
        </table>
    )
}

export default PatientInfo;