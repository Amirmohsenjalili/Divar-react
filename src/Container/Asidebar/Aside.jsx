import React, { useState } from 'react';

//_mock_
import {AsideCategory} from '../../__mock__/AsideCategory';

//imgs
import img from '../../assets/images/ChevronDown.svg';

//styles
import styles from "./styles.module.scss"

//atoms
import Buttons from '../../components/atoms/Button/Buttons';
import Input from '../../components/atoms/Input/Input';

//redux
import { useSelector } from 'react-redux';




const Aside = () => {
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
            <div className={dark ? `${styles.dark} ${styles.asidebar__container} '  fixed w-80 top-20 pt-8 px-4 md:absolute lg:absolute xl:fixed xl:w-72 ' ` : `' fixed w-80 top-20 pt-8 px-4 sm:hidden md:block md:absolute lg:absolute xl:fixed xl:w-72 ' ${styles.asidebar__container}`}>
                <div className='hidden md:block md:fixed'>
                    {AsideCategory.map(item => 
                    <div key={item.id}>
                        <Buttons className={` ' pb-10 text-xs text-black opacity-100 ' ${styles.asidebar__menu__title}`}>{item.name}</Buttons>
                        {item.items.map(i => 
                        <Buttons key={i.id} className={` ' text-xs pb-5 gap-2 h-9 items-center opacity-60 ' ${styles.asidebar__menu__item}`}>
                            {i.img}{i.title}
                        </Buttons>
                        )}
                    </div>
                    )}
                    <div className='mt-5 mb-24 w-52	'>
                        <div className='border-t-2 pt-2'>
                            <Buttons className={` ' items-center box-content text-xs h-10 ' ${styles.aside__button__item}`}  onClick={toggleShowPlace}>
                                <img src={img} alt='dropdown' className='pl-2' />
                                <span>محل</span>
                            </Buttons>
                            {showPlace && 
                                <div className={styles.aside__button__filterPlace} >
                                <Input className='rounded w-full h-6 text-xs	px-1.5 opacity-50 mb-2.5' type="text" placeholder="تعیین محل" />
                            </div>
                            }
                        </div>
                        <div className='border-t-2 pt-2'>
                            <Buttons className={` ' items-center box-content text-xs h-10 ' ${styles.aside__button__item}`}  onClick={toggleShowPrice}>
                                <img src={img} alt='dropdown' className='pl-2' />
                                <span>قیمت</span>
                            </Buttons>
                            {showPrice && 
                                <div className={`' h-24	flex items-center gap-2.5 ' ${styles.aside__button__filterPrice}`}>
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
                            <Buttons className={` ' items-center box-content text-xs h-10 ' ${styles.aside__button__item}`} onClick={toggleShowCondition}>
                                <img src={img} alt='dropdown' className='pl-2' />
                                <span>وضعیت آگهی</span>
                            </Buttons>
                            {showCondition && 
                                <div className={styles.aside__switchFilter}>
                                    <div className={` ' flex items-center justify-between text-xs opacity-100 p-2.5 ' ${styles.aside__toggleSwitchFilter}`}>
                                        <span>فقط عکس دار</span>
                                        <div>
                                            <div className=' relative inline-block w-8 h-4 '>
                                                <span className={!click ? `' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.aside__slider} ${styles.aside__round}` : ` ' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.aside__sliderb} ${styles.aside__round}` } onClick={toggle}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={` ' flex items-center justify-between text-xs opacity-100 p-2.5 ' ${styles.aside__toggleSwitchFilter}`}>
                                        <span>فقط فوری</span>
                                        <div>
                                            <div className=' relative inline-block w-8 h-4 '>
                                                <span className={!click2 ? `' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.aside__slider} ${styles.aside__round}` : ` ' absolute top-0 left-0 right-0 bottom-0 cursor-pointer ' ${styles.aside__sliderb} ${styles.aside__round}` } onClick={toggle2}></span>
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

export default Aside;
