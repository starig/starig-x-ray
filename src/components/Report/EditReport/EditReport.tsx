import React, {FC} from 'react';
import styles from './EditReport.module.scss';
import reportLogo from './../../../assets/icons/reportLogo.svg';
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";
import {FcCancel, FcOk} from "react-icons/fc";


const EditReport: FC = () => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.editReport}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <img src={reportLogo} alt={'Report logo'} />
                        <button className={styles.templateButton}>
                            + Template
                        </button>
                        <button className={styles.logoArrow}>
                            <HiArrowLeft size={24}/>
                        </button>
                        <button className={styles.logoArrow}>
                            <HiArrowRight size={24}/>
                        </button>
                    </div>
                    <div className={styles.headerStatus}>
                        <FcOk size={24}/>
                        <FcCancel size={24}/>
                    </div>
                </div>
                <div className={styles.body}>

                </div>
                <div className={styles.footer}>
                    <div className={styles.reportInfo}>
                        <div className={styles.reportDate}>
                            Last edited 27/09/2022 - 4:46PM
                        </div>
                        <div className={styles.approvedBy}>
                            Approved by Bayaraa Purevdorj, M.D
                        </div>
                    </div>
                    <div className={styles.reportButtons}>
                        <div className={styles.gradientBox}>
                            <button className={`${styles.editButton} ${styles.reportButton}`}>Edit</button>
                        </div>
                        <div className={styles.gradientBox}>
                            <button className={`${styles.approveButton} ${styles.reportButton}`}>Approve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditReport;