import React from 'react';
import NavCategory from '../../../__mock__/NavCategory';
import CardCategory from './CardCategory';
import styles from '../styles.module.scss';
import Home from '../../../../images/ctg.png'

const NavbarCategory = () => {


    return (
        <div className={styles.category}>
            {NavCategory.map(i => <CardCategory key={i.id} headCtg={i.title} item={i.items}/>)}
            <div className={styles.imgCategory}>
                <img src={Home} alt='home'/>
                <button>  همه ی آگهی های دیوار  </button>
            </div>
        </div>

        
    );
};

export default NavbarCategory;