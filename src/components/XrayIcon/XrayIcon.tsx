import React, {FC, useState} from 'react';
import styles from './XrayIcon.module.scss';

interface XrayIconInterface {
    url: string;
    alt: string;
    isAi?: boolean;
    handleAi?: (value: boolean) => void;
}

const XrayIcon: FC<XrayIconInterface> = ({ url, alt, handleAi, isAi }) => {
    const [isActive, setIsActive] = useState<boolean | undefined>(isAi);
    const aiHandler = () => {
        if (handleAi) {
            handleAi(!isAi);
            setIsActive(!isActive);
        }
    }

    return (
        <button className={`${styles.xrayIcon} ${isActive && styles.xrayIconActive}`} onClick={aiHandler}>
            <img src={url} alt={alt} />
        </button>
    )
};

export default XrayIcon;