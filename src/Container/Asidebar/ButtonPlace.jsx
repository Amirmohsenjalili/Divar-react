import React from 'react';
import styles from "../../assets/styles/Asaidebar.module.scss";

//atoms
import Input from '../../components/atoms/Input/Input'


const ButtonPlace = () => {
    return (
            <div className={styles.filterPlace}>
                <Input  type="text" placeholder="تعیین محل" />
            </div>
    );
};

export default ButtonPlace;