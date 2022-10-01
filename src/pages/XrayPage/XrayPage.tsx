import React, {FC} from 'react';
import Header from "../../components/Header/Header";
import styles from './XrayPage.module.scss';
import PatientInfo from "../../components/PatientInfo/PatientInfo";
import XrayPhoto from "../../components/XrayPhoto/XrayPhoto";
import ProgressBar from "@ramonak/react-progress-bar";
import {BiPencil} from "react-icons/bi";
import {AiOutlineEye} from "react-icons/ai";

const XrayPage: FC = () => (
    <div>
        <Header/>
        <PatientInfo/>
        <div className={styles.xrayContent}>
            <XrayPhoto/>
            <div className={styles.xrayResults}>
                <h2>Preliminary results</h2>
                <div className={styles.resultsPB}> {/*ProgressBar*/}
                    <div className={styles.resultsPBHeader}>
                        <h3>
                            Abnormality
                        </h3>
                        <h3>75%</h3>
                    </div>
                    <ProgressBar completed={75}
                                 className={styles.wrapper}
                                 bgColor={'#CD2C2C'}
                                 baseBgColor={'#2E303F'}
                                 height={'10'}
                                 labelSize={'0'}/>
                </div>
                <div className={styles.resultsPB}> {/*ProgressBar*/}
                    <div className={styles.resultsPBHeader}>
                        <h3>
                            Pneumonial
                        </h3>
                        <h3>93%</h3>
                    </div>
                    <ProgressBar completed={93}
                                 className={styles.wrapper}
                                 bgColor={'#CD2C2C'}
                                 baseBgColor={'#2E303F'}
                                 height={'10'}
                                 labelSize={'0'}/>
                </div>
                <div className={styles.resultsTable}>
                    <h3>AI Statistics</h3>
                    <table>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                        <tr>
                            <th className={styles.tableRowTitle}>Atelectasis</th>
                            <th>70%</th>
                        </tr>
                    </table>
                </div>
                <div className={styles.resultsButtons}>
                    <button className={styles.resultsButton}>
                        <BiPencil />
                        Edit report
                    </button>
                    <button className={styles.resultsButton}>
                        <AiOutlineEye />
                        View report
                    </button>
                    <button className={styles.resultsButton}>
                        Edit report
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default XrayPage;