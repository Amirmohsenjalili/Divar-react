import React, { useState, useContext } from 'react';
import {AsaideCategory} from './__mock__/AsaideCategory';
import AsaideName from './Asidebar/AsaideName';
import styles from "./styles/Asaidebar.module.scss";
import Accordon from './Asidebar/Accordon';
import ButtonPlace from './Asidebar/ButtonPlace';
import ButtonPrice from './Asidebar/ButtonPrice';
import ButtonCondition from './Asidebar/ButtonCondition';
import useIsDesktop from '../useIsDesktop';

//context
import { CategoryContext } from '../context/CategotyContextProvider';
import { ThemeContext } from '../context/ThemeContextProvider';



const Aside = () => {
    const [showPlace, setShowPlace] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showCondition, setShowCondition] = useState(false);
    const isDesktop = useIsDesktop()

    const {show} = useContext(CategoryContext)
    const {dark} = useContext(ThemeContext)

    const toggleShowPlace = () => {
        setShowPlace(!showPlace);
    };
    
    const toggleShowPrice = () => {
        setShowPrice(!showPrice);
    };
    
    const toggleShowCondition = () => {
        setShowCondition(!showCondition);
    };
    
    
    return (
        <>{ isDesktop && 
            <div className={!dark ? styles.dark : `${styles.asaidebar} ${styles.browse}`}>
                <div className={
                    !show ? styles.showCategory : `${styles.asaidebar} ${styles.browse}` 
                    }>
                    {AsaideCategory.map(item => <AsaideName key={item.id} name={item.name} items={item.items}/>)}
                    <div className={styles.asaideButton2}>
                    <Accordon title="محل" show={toggleShowPlace}/>
                    {showPlace && <ButtonPlace />}
                    <Accordon title="قیمت" show={toggleShowPrice}/>
                    {showPrice && <ButtonPrice/>}
                    <Accordon title="وضعیت آگهی" show={toggleShowCondition}/>
                    {showCondition && <ButtonCondition />}
                    </div>
                </div>
            </div>

        }
        </>
    );
};

export default Aside;
