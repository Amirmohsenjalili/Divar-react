import React from 'react';
import ItemCategory from './ItemCategory';

const CardCategory = ({headCtg, item}) => {
    return (
        <div className='mx-8 my-3'>
            <h4 className='font-normal text-xs leading-loose'>{headCtg}</h4>
            {item.map(item =><ItemCategory key={item.index} items={item}/>)}
        </div>
    );
};

export default CardCategory;