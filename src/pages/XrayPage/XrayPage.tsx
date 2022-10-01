import React, {FC} from 'react';
import Header from "../../components/Header/Header";
import styles from './XrayPage.module.scss';
import PatientInfo from "../../components/PatientInfo/PatientInfo";
import XrayPhoto from "../../components/XrayPhoto/XrayPhoto";

const XrayPage: FC = () => (
    <div>
        <Header />
        <PatientInfo />
        <div className={styles.xrayContent}>
            <XrayPhoto />
            <div className={styles.xrayResults}>

            </div>
        </div>
    </div>
);

export default XrayPage;