import React, { useState } from 'react';

//_mock_
import {SideCategory} from '../../__mock__/SideCategory';

//imgs
import img from '../../assets/images/ChevronDown.svg';

//styles
import styles from "./styles.module.scss"

//atoms
import Button from '../../components/Button';
import Input from '../../components/Input';

//redux
import { useSelector } from 'react-redux';




const Side = () => {
    const [showPlace, setShowPlace] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showCondition, setShowCondition] = useState(false);
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const dark = useSelector((state) => state.theme.dark)


    const toggleShowPlace = () => {
        setShowPlace(!showPlace);
    };
    
    const toggleShowPrice = () => {
        setShowPrice(!showPrice);
    };
    
    const toggleShowCondition = () => {
        setShowCondition(!showCondition);
    };

    const toggle  = () => {
        setClick(!click);
    };

    const toggle2  = () => {
        setClick2(!click2);
    };
    
    
    return (
            <div className={dark ? `${styles.dark} ${styles.Sidebar__container} '  fixed w-80 top-20 pt-8 px-4 md:absolute lg:absolute xl:fixed xl:w-72 ' ` : `' fixed w-80 top-20 pt-8 px-4 sm:hidden md:block md:absolute lg:absolute xl:fixed xl:w-72 ' ${styles.Sidebar__container}`}>
                <div className='hidden md:block md:fixed'>
                    {SideCategory.map(item => 
                    <div key={item.id}>
                        <Button className={` ' pb-10 text-xs text-black opacity-100 ' ${styles.Sidebar__menu__title}`}>{item.name}</Button>
                        {item.items.map(i => 
                        <Button key={i.id} className={` ' text-xs pb-5 gap-2 h-9 items-center opacity-60 ' ${styles.Sidebar__menu__item}`}>
                            {i.img}{i.title}
                        </Button>
                        )}
                    </div>
                    )}
                    <div className='mt-5 mb-24 w-52	'>
                        <div className='border-t-2 pt-2'>
                            <Button className={` ' items-center box-content text-xs h-10 ' ${styles.Side__button__item}`}  onClick={toggleShowPlace}>
                                <img src={img} alt='dropdown' className='pl-2' />
                                <span>محل</span>
                            </Button>
                            {showPlace && 
                                <div className={styles.Side__button__filterPlace} >
                                <Input className='rounded w-full h-6 text-xs	px-1.5 opacity-50 mb-2.5' type="text" placeholder="تعیین محل" />
                            </div>
                            }
                        </div>
                        <div className='border-t-2 pt-2'>
                            <Button className={` ' items-center box-content text-xs h-10 ' ${styles.Side__button__item}`}  onClick={toggleShowPrice}>
                                <img src={img} alt='dropdown' className='pl-2' />
                                <span>قیمت</span>
                            </Button>
                            {showPrice && 
                                <div className={`' h-24	flex items-center gap-2.5 ' ${styles.Side__button__filterPrice}`}>
                                    <div>
                                        <span>حداقل</span>
                                        <div>:</div>
                                        <span>حداکثر</span>
                                    </div>
                                    <div>
                                        <Input className=' rounded w-full h-6 text-xs p-1 opacity-50 mb-2.5 mt-2.5 ' type="text"
                                            placeholder="مثلا 7،000،000،000       تومان"/>
                                        
                                        <Input className=' rounded w-full h-6 text-xs p-1 opacity-50 mb-2.5 mt-2.5 ' type="text"
                                            placeholder="مثلا 7،000،000،000       تومان"/>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='border-t-2 pt-2'>
                            <Button className={` ' items-center box-content text-xs h-10 ' ${styles.Side__button__item}`} onClick={toggleShowCondition}>
                                <img src={img} alt='dropdown' className='pl-2' />
                                <span>وضعیت آگهی</span>
                            </Button>
                            {showCondition && 
                                <div className={styles.Side__switchFilter}>
                                    <div className={` ' flex items-center justify-between text-xs opacity-100 p-2.5 ' ${styles.Side__toggleSwitchFilter}`}>
                                        <span>فقط عکس دار</span>
                                        <div>
                                            <div className=' relative inline-block w-8 h-4 '>
                                                <span className={!click ? `' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.Side__slider} ${styles.Side__round}` : ` ' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.Side__sliderb} ${styles.Side__round}` } onClick={toggle}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={` ' flex items-center justify-between text-xs opacity-100 p-2.5 ' ${styles.Side__toggleSwitchFilter}`}>
                                        <span>فقط فوری</span>
                                        <div>
                                            <div className=' relative inline-block w-8 h-4 '>
                                                <span className={!click2 ? `' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.Side__slider} ${styles.Side__round}` : ` ' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.Side__sliderb} ${styles.Side__round}` } onClick={toggle2}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Side;
