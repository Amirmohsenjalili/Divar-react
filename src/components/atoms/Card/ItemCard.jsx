import React from 'react';

//style
import styles from './styles.module.scss';
// img
import notPhoto from '../../../assets/images/notPhoto.png'

const ItemCard = ({title, category, price, image, footer}) => {
    return (
        <div className={`${styles.container} '  rounded min-w-max flex p-4 justify-between gap-2 flex-auto '`}>
            <div className=' flex flex-col gap-2 mt-2 '>
                <h4 className=' truncate pb-4 w-36 font-medium text-base '>{title}</h4>
                <span className=' text-sm leading-6 text-slate-400 '>{category}</span>
                <span className=' text-sm leading-6 text-slate-400 '>{price}</span>
                <span className=' truncate pb-4 w-36 text-sm leading-6 text-slate-400 '>{footer}</span>
            </div>
            <img src={image ? image : notPhoto } alt='pictuer' className=' h-36 w-36 rounded '/>
        </div>
    );
};

export default ItemCard;