import React, { useState, useContext } from 'react';
import {AsaideCategory} from '../../__mock__/AsaideCategory';
import AsaideName from './AsideItem/AsaideName';
import styles from "../../assets/styles/Asaidebar.module.scss";
import Accordion from './Accordion/Accordion';
import ButtonPlace from './Accordion/ButtonAccordion/ButtonPlace';
import ButtonPrice from './Accordion/ButtonAccordion/ButtonPrice';
import ButtonCondition from './Accordion/ButtonAccordion/ButtonCondition';
import useIsDesktop from '../../hooks/useIsDesktop';

//context
import { CategoryContext } from '../../context/CategotyContextProvider';
import { ThemeContext } from '../../context/ThemeContextProvider';



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
                    <Accordion title="محل" show={toggleShowPlace}/>
                    {showPlace && <ButtonPlace />}
                    <Accordion title="قیمت" show={toggleShowPrice}/>
                    {showPrice && <><ButtonPrice/></>}
                    <Accordion title="وضعیت آگهی" show={toggleShowCondition}/>
                    {showCondition && <ButtonCondition />}
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Aside;
