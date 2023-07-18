import React, { useContext, useEffect } from 'react';
import products from '../../__mock__/Products';
import CardMain from './cardMain';
import styles from '../../assets/styles/Main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../features/cards/cardsSlice';

// context
import { ThemeContext } from '../../context/ThemeContextProvider';

const Main = () => {

    const {dark} = useContext(ThemeContext);

    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards);

    useEffect(() => {
        dispatch(fetchCards());
    },[]);

    return (
        <div className={!dark ? `${styles.dark} ${styles.main}` : styles.main}>
            <h1> دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران </h1>
            <div className={styles.mainItem}>
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
            {cards.loading ? <h2>Loading ...</h2> : null}
            <div className={styles.mainItem}>{cards.cards ? cards.cards.map(i => <CardMain 
            key={i.id}
            title={i.title} 
            category={i.category} 
            price={i.price} 
            image={i.image}
            />) : null}</div>
            {cards.error ? <h2>{cards.error.massage}</h2> : null}
            </div>
        </div>
    );
};

export default Main;