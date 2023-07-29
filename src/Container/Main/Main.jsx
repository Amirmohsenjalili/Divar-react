import React, { useContext, useEffect } from 'react';

//_mock_
import products from '../../__mock__/Products';

//styles
import styles from './Main.module.scss';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../features/cards/cardsSlice';

// context
import { ThemeContext } from '../../context/ThemeContextProvider';

//atoms
import ItemCard from '../../components/atoms/Card/ItemCard';

const Main = () => {

    const {dark} = useContext(ThemeContext);

    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards);

    useEffect(() => {
        dispatch(fetchCards());
    },[]);

    return (
        <div className={!dark ? `
        ${styles.dark} ' m-auto flex flex-col gap-2 items-center relative top-5 z-0 md:mr-64 lg:mr-96  lg:items-end '` : 'm-auto flex flex-col gap-2 items-center relative top-5 z-0 md:mr-64 lg:mr-96  lg:items-end'}>
            <h1 className=' pb-2 text-slate-500 text-xs leading-6 lg:text-left'> دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران </h1>
            <div>
                <div className={` ' flex flex-col flex-wrap items-center gap-2.5 mb-2.5 lg:flex-row lg:justify-end ' ${styles.main__item} `}>
                    {products.map(item => 
                    <ItemCard 
                    key={item.id} 
                    title={item.title} 
                    category={item.category} 
                    price={item.price} 
                    image={item.image}/>
                    )}
                    {cards.loading ? <h2>Loading ...</h2> : null}
                </div>
                <div className={` ' flex flex-col flex-wrap items-center gap-2.5 mb-2.5 lg:flex-row lg:justify-end ' ${styles.main__item} `}>
                    {cards.cards ? cards.cards.map(i => <ItemCard 
                        key={i.id}
                        title={i.title} 
                        category={i.category} 
                        price={i.price} 
                        image={i.image}
                        />) : null}
                </div>
                {cards.error ? <h2>{cards.error.massage}</h2> : null}
            </div>
        </div>
    );
};

export default Main;