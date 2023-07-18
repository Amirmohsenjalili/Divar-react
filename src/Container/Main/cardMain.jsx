import React from 'react';
import styles from '../../assets/styles/Main.module.scss'

//atoms 
import Card from '../../components/atoms/Card/Card';

const CardMain = ({title, category, price, image}) => {


    return (
        <Card className={styles.CardMain}>
            <div className={styles.CardMainItem}>
                <h4>{title}</h4>
                <span>{category}</span>
                <span>{price}</span>
            </div>
            <img src={image} alt='pictuer'/>
        </Card>
       
    );
};

export default CardMain;