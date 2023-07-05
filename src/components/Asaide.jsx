import React, { useState } from 'react';
import {AsaideCategory} from './__mock__/AsaideCategory';
import AsaideName from './Asidebar/AsaideName';
import styles from "./styles/Asaidebar.module.scss";
import Accordon from './Asidebar/Accordon';
import ButtonPlace from './Asidebar/ButtonPlace';
import ButtonPrice from './Asidebar/ButtonPrice';
import ButtonCondition from './Asidebar/ButtonCondition';




const Aside = () => {

    const [showPlace, setShowPlace] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showCondition, setShowCondition] = useState(false);

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
        <div className={`${styles.asaidebar} ${styles.browse}`}>
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
    );
};

export default Aside;