import React, {FC} from 'react';
import styles from "./Header.module.scss";
import {RiFileDownloadLine} from "react-icons/ri";

const Header: FC = () => (
    <div className={styles.header}>
        <h3>Chest X-RAY Report</h3>
        <div className={styles.download}>
            <button className={styles.downloadButton}>
                <RiFileDownloadLine className={styles.buttonIcon}/>
                Download report
            </button>
        </div>
    </div>
);

export default Header;