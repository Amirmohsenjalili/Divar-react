import React from 'react';
import NavCategory from '../../../__mock__/NavCategory';
import CardCategory from './CardCategory';
import styles from '../styles.module.scss';
import Home from '../../../assets/images/ctg.png'
import Buttons from '../../../components/atoms/Button/Buttons';

const NavbarCategory = () => {


    return (
        <div className={`${styles.navbar__category} ' hidden lg:flex absolute w-3/4 bg-white rounded top-14 right-44 flex flex-col whitespace-nowrap h-14 flex-wrap bg-white h-14 content-start	 gap-2.5 z-10 cursor-pointer content-start'`}>
            {NavCategory.map(i => <CardCategory key={i.id} headCtg={i.title} item={i.items}/>)}
            <div className=' flex flex-col items-end absolute bottom-0 left-2.5 '>
                <img src={Home} alt='home' className='w-72 h-52'/>
                <Buttons className=' p-2.5	text-xs mb-5 text-gray-400 hover:bg-gray-200 hover:text-black '>  همه ی آگهی های دیوار  </Buttons>
            </div>
        </div>

        
    );
};

export default NavbarCategory;