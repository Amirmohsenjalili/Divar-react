import React from 'react';
import styles from '../styles.module.scss';

const ItemCategory = ({items}) => {
    return (
        <div className={styles.categoryItems}>
            <a href='#'>{items.a}</a>
            <a href='#'>{items.b}</a>
            <a href='#'>{items.c}</a>
        </div>
    );
};

export default ItemCategory;