import React from 'react';
import styles from "../../../assets/styles/Asaidebar.module.scss";

//atoms
import Buttons from '../../atoms/Button/Buttons';


const AsaideItem = ({ img, title }) => {
    return (
        // <div className={styles.asaideItem}>
        <Buttons className={styles.asaideItem}>
            <p>{img}</p>
            <p>{title}</p>
        </Buttons>
        // {/* </div> */}
    );
};

export default AsaideItem;