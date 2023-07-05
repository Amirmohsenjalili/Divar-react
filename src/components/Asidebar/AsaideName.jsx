import React from 'react';
import AsaideItem from './AsaideItem';
import styles from "../styles/Asaidebar.module.scss";

const AsaideName = ( { name,items } ) => {
    return (
        <div>
            <p>{name}</p>
            {items.map(i => <AsaideItem key={i.id} img={i.img} title={i.title} />)}
        </div>
    );
};

export default AsaideName;