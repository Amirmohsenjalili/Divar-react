import React from 'react';
import styles from '../styles.module.scss';

const ItemCategory = ({items}) => {
    return (
        <div className='flex flex-col flex-wrap m-0'>
            <a href='#' className='font-normal text-xs leading-loose text-gray-400 hover:text-black'>{items.a}</a>
            <a href='#' className='font-normal text-xs leading-loose text-gray-400 hover:text-black'>{items.b}</a>
            <a href='#' className='font-normal text-xs leading-loose text-gray-400 hover:text-black'>{items.c}</a>
        </div>
    );
};

export default ItemCategory;