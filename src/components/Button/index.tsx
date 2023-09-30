import React from 'react';
import styles from './styles.module.scss';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({children, onClick, className}) => {
    return <button className={` ' border-none flex rounded '  ${styles.button} ${className} `} onClick={onClick}>{children}</button>
};

export default Button;