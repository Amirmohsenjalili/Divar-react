import React from 'react';
import AsaideItem from './AsaideItem';
import styles from '../../../assets/styles/Asaidebar.module.scss'

//atoms 
import Buttons from '../../../components/atoms/Button/Buttons';

const AsaideName = ( { name,items } ) => {
    return (
        <Buttons className={styles.conteiner}>
            <p>{name}</p>
            {items.map(i => <AsaideItem key={i.id} img={i.img} title={i.title} />)}
        </Buttons>
    );
};

export default AsaideName;