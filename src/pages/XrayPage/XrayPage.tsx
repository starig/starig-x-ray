import React, {FC, useEffect} from 'react';
import styles from './XrayPage.module.scss';
import Header from "../../components/Header/Header";
import PatientInfo from "../../components/PatientInfo/PatientInfo";
import XrayPhoto from "../../components/XrayPhoto/XrayPhoto";
import XrayResults from "../../components/XrayResults/XrayResults";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import PatientInfoLoader from "../../components/Skeletons/PatientInfoLoader";
import XrayResultsLoader from "../../components/Skeletons/XrayResultsLoader";
import {fetchXrayData} from "../../redux/actions";

const XrayPage: FC = () => {

    const { status } = useSelector((state: RootState) => state.xray);
    const dispatch = useDispatch<AppDispatch>();

    const getXrayData = async () => {
        try {
            dispatch(fetchXrayData());
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getXrayData();
    }, [])

    return (
        <div>
            <Header/>
            {
                status === 'loading' ? <PatientInfoLoader /> : <PatientInfo />
            }
            <div className={styles.xrayContent}>
                <XrayPhoto/>
                {
                    status === 'loading' ? <XrayResultsLoader /> : <XrayResults />
                }
            </div>
        </div>
    )
};

export default XrayPage;