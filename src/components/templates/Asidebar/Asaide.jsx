import React, { useState, useContext } from 'react';
import {AsaideCategory} from '../../../__mock__/AsaideCategory';
import AsaideName from './AsaideName';
import styles from "../../../assets/styles/Asaidebar.module.scss";
import Accordon from './Accordon';
import ButtonPlace from './ButtonPlace';
import ButtonPrice from './ButtonPrice';
import ButtonCondition from './AsaideButton';
import useIsDesktop from '../../../hooks/useIsDesktop';
//organisms
import Asaides from '../../organisms/Asaide/Asaide';
//molecules
import Form from '../../molecules/Form/Form';
//context
import { CategoryContext } from '../../../context/CategotyContextProvider';
import { ThemeContext } from '../../../context/ThemeContextProvider';



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
            <Asaides className={!dark ? styles.dark : `${styles.asaidebar} ${styles.browse}`}>
            {/* <div className={!dark ? styles.dark : `${styles.asaidebar} ${styles.browse}`}> */}
                <Form className={
                    !show ? styles.showCategory : `${styles.asaidebar} ${styles.browse}` 
                    }>
                {/* <div className={
                    !show ? styles.showCategory : `${styles.asaidebar} ${styles.browse}` 
                    }> */}
                    {AsaideCategory.map(item => <AsaideName key={item.id} name={item.name} items={item.items}/>)}
                    {/* <div className={styles.asaideButton2}> */}
                    <Form className={styles.asaideButton2}>
                    <Accordon title="محل" show={toggleShowPlace}/>
                    {showPlace && <ButtonPlace />}
                    <Accordon title="قیمت" show={toggleShowPrice}/>
                    {showPrice && <ButtonPrice/>}
                    <Accordon title="وضعیت آگهی" show={toggleShowCondition}/>
                    {showCondition && <ButtonCondition />}
                    {/* </div> */}
                    </Form>
                {/* </div> */}
                </Form>
            {/* </div> */}
            </Asaides>

        }
        </>
    );
};

export default Aside;
