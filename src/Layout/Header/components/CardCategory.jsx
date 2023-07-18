import React from 'react';
import ItemCategory from './ItemCategory';
import styles from '../styles.module.scss';

const CardCategory = ({headCtg, item}) => {
    return (
        <div className={styles.boxCategory}>
            <h4>{headCtg}</h4>
            {item.map(item =><ItemCategory key={item.index} items={item}/>)}
        </div>
    );
};

export default CardCategory;