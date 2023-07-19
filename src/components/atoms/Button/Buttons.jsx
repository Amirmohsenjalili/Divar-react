import React from 'react';
import styles from './styles.module.scss'


const Buttons = ({children, onClick, className}) => {
    return (
        <>
            <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
        </>
    );
};

export default Buttons;