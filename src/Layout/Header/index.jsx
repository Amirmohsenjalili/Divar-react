import React, { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import loc from "../../assets/images/location.svg";
import ChevronDown from "../../assets/images/ChevronDown.svg";
import search from "../../assets/images/Search.svg";
import Person from "../../assets/images/Person.svg";
import chatIcon from "../../assets/images/chat.svg";
import NavbarCategory from "./components/NavbarCategory";
import useIsDesktop from "../../hooks/useIsDesktop";
import ThemeIcon from '../../assets/images/moon.png';
import styles from "./styles.module.scss";

//atoms
import Buttons from "../../components/atoms/Button/Buttons";
import Input from "../../components/atoms/Input/Input";

//context
import { CategoryContext } from "../../context/CategotyContextProvider";
import { ThemeContext } from "../../context/ThemeContextProvider";

const Navbar = () => {

  const isDesktop = useIsDesktop()
  const {show, dispatch} = useContext(CategoryContext)
  const {dark, darkDispatch} = useContext(ThemeContext)

  return (
    <div className={!dark ? `${styles.dark} ${styles.navHead}` : styles.navHead}>
      <nav className={`${styles.nav} ${styles.flexItem} ${styles.browse}`}>
        {isDesktop && (
          <div className={styles.flexItem}>
            <Buttons className={styles.logo}>
              <img src={logo} alt="logo" className={styles.logo} />
            </Buttons>
            
            <hr className={styles.divider} />

            <Buttons className={`${styles.navbtn} ${styles.navlocation}`}>
              <img src={loc} alt="loc" className={styles.img} />
              <span>تهران</span>

            </Buttons>
            
            <Buttons 
              className={`${styles.navbtn} ${styles.showCategory}`}
              onClick={() => dispatch({type: "SHOW"})}
            >
              <span>دسته ها</span>
              <img src={ChevronDown} alt="ChevronDown" className={styles.img} />
            </Buttons>
          
          </div>

          
        )}
        <div>
          <label 
            className={styles.navlabel}
            onclick="document.getElementById('Search').focus(); return false;"
          >
            <img src={search} alt="search" className={styles.img} />
            <Input 
              type="Search"
              name="Search"
              id="Search"
              placeholder="جستجو در همه آگهی ها"/>
          </label>
        </div>
        {isDesktop && (
          <div className={`${styles.navLeft} ${styles.flexItem}`}>
            <Buttons className={styles.navbtn}>
              <img src={Person} alt="Person" className={styles.img} />
              <span>دیوار من</span>
            </Buttons>
            <Buttons className={styles.navbtn}>
              <img src={chatIcon} alt="chatIcon" className={styles.img} />
              <span>چت</span>
            </Buttons>
            <Buttons className={styles.navbtn}>
              پشتیبانی
            </Buttons>
            <Buttons className={`${styles.ThemeIcon} ${styles.navbtn}`} onClick={() => darkDispatch({type: "DARK"})}>
              <img src={ThemeIcon} alt="ThemeIcon"/>
            </Buttons>
            <Buttons className={`${styles.navbtn} ${styles.submitbtn}`}>
              ثبت آگهی
            </Buttons>
          </div>
        )}
      </nav>
      {!show && <NavbarCategory />}
    </div>
  );
};
export default Navbar;
