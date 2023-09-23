import React from 'react';
import styles from './styles.module.scss'


const Button = ({children, onClick, className}) => {
    return <button className={` ' border-none flex rounded '  ${styles.button} ${className} `} onClick={onClick}>{children}</button>
};

export default Button;