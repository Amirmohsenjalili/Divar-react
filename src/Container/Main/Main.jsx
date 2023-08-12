import React, { useEffect } from 'react';

//styles
import styles from './Main.module.scss';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/cards/cardsSlice';

//atoms
import ItemCard from '../../components/atoms/Card/ItemCard';

const Main = () => {

    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards);
    const dark = useSelector((state) => state.theme.dark)

    useEffect(() => {
        dispatch(fetchData());
    },[dispatch]);


    return (
        <div className={dark ? `
        ${styles.dark} ' m-auto flex flex-col gap-2 items-center relative top-5 z-0 md:mr-64 lg:mr-96  lg:items-end '` : 'm-auto flex flex-col gap-2 items-center relative top-5 z-0 md:mr-64 lg:mr-96  lg:items-end'}>
            <h1 className=' pb-2 text-slate-500 text-xs leading-6 lg:text-left'> دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران </h1>
                <div className={` ' flex flex-col flex-wrap items-center gap-2.5 mb-2.5 lg:flex-row lg:justify-end ' ${styles.main__item} `}>
                    {cards.cards ? cards.cards.map((i, index)=> <ItemCard 
                        key={index}
                        title={i.data.title} 
                        category={i.data.top_description_text}
                        footer={i.data.bottom_description_text} 
                        price={i.data.middle_description_text} 
                        image={i.data.image_url[0] ? i.data.image_url[0].src : false }
                        />) : null}
                        
                </div>
                {cards.error ? <h2>{cards.error.massage}</h2> : null}
                <div >loading...</div>
        </div>
    );
};

export default Main;