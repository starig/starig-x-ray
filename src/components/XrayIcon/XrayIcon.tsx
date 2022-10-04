import React, {FC, useEffect, useState} from 'react';
import styles from './XrayIcon.module.scss';

interface XrayIconInterface {
    url: string;
    alt: string;
    status?: boolean;
    handleStatus?: (value: boolean) => void;
}

const XrayIcon: FC<XrayIconInterface> = ({ url, alt, handleStatus, status }) => {
    const [isActive, setIsActive] = useState<boolean | undefined>(status);
    const aiHandler = () => {
        if (handleStatus) {
            handleStatus(!status);
            setIsActive(!isActive);
        }
    }

    useEffect(() => {
        if (!status) {
            setIsActive(false);
        }
    }, [status])

    return (
        <button className={`${styles.xrayIcon} ${isActive && styles.xrayIconActive}`} onClick={aiHandler}>
            <img src={url} alt={alt} />
        </button>
    )
};

export default XrayIcon;