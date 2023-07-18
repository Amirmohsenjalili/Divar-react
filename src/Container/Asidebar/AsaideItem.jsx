import React from 'react';
import styles from "../../assets/styles/Asaidebar.module.scss";

//atoms
import Buttons from '../../components/atoms/Button/Buttons';


const AsaideItem = ({ img, title }) => {
    return (
        <Buttons className={styles.asaideItem}>
            <p>{img}</p>
            <p>{title}</p>
        </Buttons>
    );
};

export default AsaideItem;