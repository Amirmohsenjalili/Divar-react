import React from 'react';
import styles from '../styles/Main.module.scss'


const CardMain = ({title, category, price, image}) => {


    return (
        <div className={styles.CardMain}>
            <div className={styles.CardMainItem}>
                <h4>{title}</h4>
                <span>{category}</span>
                <span>{price}</span>
            </div>
            <img src={image} alt='pictuer'/>
        </div>
       
    );
};

export default CardMain;