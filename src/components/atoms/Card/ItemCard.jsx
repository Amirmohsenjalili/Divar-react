import React from 'react';

import styles from './styles.module.scss';

const ItemCard = ({title, category, price, image}) => {
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

export default ItemCard;