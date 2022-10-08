import React, {FC} from 'react';
import styles from './XrayResults.module.scss';
import ProgressBar from "@ramonak/react-progress-bar";
import {BiPencil} from "react-icons/bi";
import {AiOutlineEye} from "react-icons/ai";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const XrayResults: FC = () => {
    const { data } = useSelector((state: RootState) => state.xray);

    const { results, ab_prob, pneumonial } = data[0];

    return (
        <div className={styles.xrayResults}>
            <h2>Preliminary results</h2>
            <div className={styles.resultsPB}> {/*ProgressBar*/}
                <div className={styles.resultsPBHeader}>
                    <h3>
                        Abnormality
                    </h3>
                    <h3>{ ab_prob }%</h3>
                </div>
                <ProgressBar completed={ab_prob}
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
                    <h3>{ pneumonial }%</h3>
                </div>
                <ProgressBar completed={ pneumonial }
                             className={styles.wrapper}
                             bgColor={'#CD2C2C'}
                             baseBgColor={'#2E303F'}
                             height={'10'}
                             labelSize={'0'}/>
            </div>
            <div className={styles.resultsTable}>
                <h3>AI Statistics</h3>
                <div className={styles.resultsWrapper}>
                    {
                        results.map((item, id: number) => <div className={styles.resultsItem} key={id}>
                            <div className={styles.itemText}>{item.name}</div>
                            <div className={styles.itemText}>{item.value}%</div>
                        </div>)
                    }
                </div>
            </div>
            <div className={styles.resultsButtons}>
                <div className={styles.gradientBox}>
                    <button className={styles.resultsButton}>
                        <BiPencil/>
                        Edit report
                    </button>
                </div>
                <div className={styles.gradientBox}>
                    <button className={styles.resultsButton}>
                        <AiOutlineEye/>
                        View report
                    </button>
                </div>
                <div className={styles.gradientBox}>
                    <button className={styles.resultsButton}>
                        Print report
                    </button>
                </div>
            </div>
        </div>
    )
};

export default XrayResults;