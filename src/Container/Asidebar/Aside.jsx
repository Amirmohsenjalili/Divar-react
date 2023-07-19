import React, { useState, useContext } from 'react';
import {AsideCategory} from '../../__mock__/AsideCategory';
import img from '../../assets/images/ChevronDown.svg';
import useIsDesktop from '../../hooks/useIsDesktop';

//styles
// import styles from "../../assets/styles/Asidebar.module.scss";
import styles from "./styles.module.scss"

//context
import { CategoryContext } from '../../context/CategotyContextProvider';
import { ThemeContext } from '../../context/ThemeContextProvider';

//atoms
import Buttons from '../../components/atoms/Button/Buttons';
import Input from '../../components/atoms/Input/Input';




const Aside = () => {
    const [showPlace, setShowPlace] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showCondition, setShowCondition] = useState(false);
    const isDesktop = useIsDesktop()

    const {show} = useContext(CategoryContext)
    const {dark} = useContext(ThemeContext)

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
        <>{ isDesktop && 
            <div className={!dark ? styles.dark : `${styles.asidebar} ${styles.browse}`}>
                
                <div className={
                    !show ? styles.showCategory : `${styles.asidebar} ${styles.browse}` 
                }>
                    {AsideCategory.map(item => 
                    <div key={item.id}>
                        <Buttons className={styles.name}>{item.name}</Buttons>
                        {item.items.map(i => 
                        <Buttons key={i.id} className={styles.asideItem}>{i.img}{i.title}</Buttons>
                        )}
                    </div>
                    )}
                    <div className={styles.asideButton}>
                        <div className={styles.asideButtonItems}>
                            <Buttons className={styles.asideButtonItem}  onClick={toggleShowPlace}>
                                <img src={img} alt='dropdown' />
                                <span>محل</span>
                            </Buttons>
                            {showPlace && 
                                <div className={styles.filterPlace}>
                                <Input  type="text" placeholder="تعیین محل" />
                            </div>
                            }
                        </div>
                        <div className={styles.asideButtonItems}>
                            <Buttons className={styles.asideButtonItem}  onClick={toggleShowPrice}>
                                <img src={img} alt='dropdown' />
                                <span>قیمت</span>
                            </Buttons>
                            {showPrice && 
                                <div className={styles.filterPrice}>
                                    <div>
                                        <span>حداقل</span>
                                        <div className={styles.point}>:</div>
                                        <span>حداکثر</span>
                                    </div>
                                    <div>
                                        <Input type="text"
                                            placeholder="مثلا 7،000،000،000           تومان"/>
                                        
                                        <Input type="text"
                                            placeholder="مثلا 7،000،000،000           تومان"/>
                                        
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={styles.asideButtonItems}>
                            <Buttons className={styles.asideButtonItem} onClick={toggleShowCondition}>
                                <img src={img} alt='dropdown' />
                                <span>وضعیت آگهی</span>
                            </Buttons>
                            {showCondition && 
                                <div className={styles.switchFilter}>
                                    <div className={styles.toggleSwitchFilter}>
                                        <span>فقط عکس دار</span>
                                        <div>
                                            <div className={styles.switch}>
                                                <Input type="checkbox" />
                                                <span className={`${styles.slider} ${styles.round}`}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.toggleSwitchFilter}>
                                        <span>فقط فوری</span>
                                        <div>
                                            <div className={styles.switch}>
                                                <Input type="checkbox" />
                                                <span className={`${styles.slider} ${styles.round}`}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Aside;
