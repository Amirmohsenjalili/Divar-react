import React from 'react';
import styles from "../styles/Asaidebar.module.scss";


const AsaideItem = ({ img, title }) => {
    return (
        <div className={styles.asaideItem}>
            <p>{img}</p>
            <p>{title}</p>
        </div>
    );
};

export default AsaideItem;