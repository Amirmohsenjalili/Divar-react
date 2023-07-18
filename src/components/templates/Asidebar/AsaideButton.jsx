import React from 'react';
import styles from "../../../assets/styles/Asaidebar.module.scss";
//molecules
import Form from '../../molecules/Form/Form';
//atoms
import Buttons from '../../atoms/Button/Buttons';

const AsaideButton = ({title, img}) => {

    return (
        <Form className={styles.asaideButton}>
        {/* <div className={styles.asaideButton}> */}
            <Buttons className={styles.asaideButtonItem}>
            {/* <button className={styles.asaideButtonItem}> */}
                <span>{img}</span>
                <span>{title}</span>
            {/* </button> */}
            </Buttons>
            
        {/* </div> */}
        </Form>
    );
};

export default AsaideButton;