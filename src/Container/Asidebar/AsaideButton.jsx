import React from 'react';
import styles from "../../assets/styles/Asaidebar.module.scss";
//atoms
import Buttons from '../../components/atoms/Button/Buttons';

const AsaideButton = ({title, img}) => {

    return (
        <div className={styles.asaideButton}>
            <Buttons className={styles.asaideButtonItem}>
                <span>{img}</span>
                <span>{title}</span>
            </Buttons>
            
        </div>
    );
};

export default AsaideButton;