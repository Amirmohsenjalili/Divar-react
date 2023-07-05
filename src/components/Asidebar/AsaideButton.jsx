import React from 'react';
import styles from "../styles/Asaidebar.module.scss";

const AsaideButton = ({title, img}) => {

    return (
        <div className={styles.asaideButton}>
            <button className={styles.asaideButtonItem}>
                <span>{img}</span>
                <span>{title}</span>
            </button>
            
        </div>
    );
};

export default AsaideButton;