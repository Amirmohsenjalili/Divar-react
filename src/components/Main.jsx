import React, { useContext } from 'react';
import products from './__mock__/Products';
import CardMain from './Main/cardMain';
import styles from './styles/Main.module.scss';

// context
import { ThemeContext } from '../context/ThemeContextProvider';

const Main = () => {

    const {dark} = useContext(ThemeContext)

    return (
        <div className={!dark ? `${styles.dark} ${styles.main}` : styles.main}>
            <h1> دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران </h1>
            <div className={styles.mainItem}>
                {products.map(item => 
                <CardMain 
                key={item.id} 
                title={item.title} 
                category={item.category} 
                price={item.price} 
                image={item.image}/>
                )}
            </div>
        </div>
    );
};

export default Main;