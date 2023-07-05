import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import loc from '../../../images/location.svg';
import ChevronDown from '../../../images/ChevronDown.svg';
import search from '../../../images/Search.svg';
import Person from '../../../images/Person.svg';
import chatIcon from '../../../images/chat.svg';
import NavbarCategory from './components/NavbarCategory';


import styles from './styles.module.scss';


const Navbar = () => {

    const [showButton, setShowButton] = useState(false);

    const toggleButton = () => {
      setShowButton(!showButton);
    };

    return (
        <div className={styles.navHead}>
            <nav className={`${styles.nav} ${styles.flexItem} ${styles.browse}`}>
                <div className={styles.flexItem}>
                    <img src={logo} alt='logo' className={styles.logo}/>
                    <hr className={styles.divider}/>
                    <button className={`${styles.navbtn} ${styles.navlocation}`}>
                        <img src={loc} alt='loc' className={styles.img}/>
                        <span>تهران</span>
                    </button>
                    <button className={`${styles.navbtn} ${styles.showCategory}`} onClick={toggleButton}>
                        <span>دسته ها</span>
                        <img src={ChevronDown} alt='ChevronDown' className={styles.img}/>
                    </button>
                    <label htmlFor="Search" className={styles.navlabel}>
                        <img src={search} alt='search'  className={styles.img}/>
                        <input
                            type="Search"
                            name="Search"
                            id="Search"
                            placeholder="جستجو در همه آگهی ها"
                        />
                    </label>
                </div>
                <div  className={`${styles.navLeft} ${styles.flexItem}`}>
                    <button className={styles.navbtn}>
                        <img src={Person} alt='Person'  className={styles.img}/><span>دیوار من</span>
                    </button>
                    <button className={styles.navbtn}>
                        <img src={chatIcon} alt='chatIcon'  className={styles.img}/><span>چت</span>
                    </button>
                    <button className={styles.navbtn}>پشتیبانی</button>
                    <button  className={`${styles.navbtn} ${styles.submitbtn}`}>ثبت آگهی</button>
                </div>
            </nav>
            { showButton && <NavbarCategory />}
        </div>
    );
};

export default Navbar;