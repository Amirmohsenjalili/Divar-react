import React, { useContext } from "react";
import logo from "../../../images/logo.svg";
import loc from "../../../images/location.svg";
import ChevronDown from "../../../images/ChevronDown.svg";
import search from "../../../images/Search.svg";
import Person from "../../../images/Person.svg";
import chatIcon from "../../../images/chat.svg";
import NavbarCategory from "./components/NavbarCategory";
import useIsDesktop from "../../../useIsDesktop";
import ThemeIcon from '../../../images/moon.png';
import styles from "./styles.module.scss";

//context
import { CategoryContext } from "../../../context/CategotyContextProvider";
import { ThemeContext } from "../../../context/ThemeContextProvider";

const Navbar = () => {

  const isDesktop = useIsDesktop()
  const {show, dispatch} = useContext(CategoryContext)
  const {dark, darkDispatch} = useContext(ThemeContext)

  return (
    <div className={!dark ? `${styles.dark} ${styles.navHead}` : styles.navHead}>
      <nav className={`${styles.nav} ${styles.flexItem} ${styles.browse}`}>
        {isDesktop && (
          <div className={styles.flexItem}>
            <img src={logo} alt="logo" className={styles.logo} />

            <hr className={styles.divider} />

            <button className={`${styles.navbtn} ${styles.navlocation}`}>
              <img src={loc} alt="loc" className={styles.img} />
              <span>تهران</span>
            </button>
            <button
              className={`${styles.navbtn} ${styles.showCategory}`}
              onClick={() => dispatch({type: "SHOW"})}
            >
              <span>دسته ها</span>
              <img src={ChevronDown} alt="ChevronDown" className={styles.img} />
            </button>
          </div>
        )}
        <label htmlFor="Search" className={styles.navlabel}>
          <img src={search} alt="search" className={styles.img} />
          <input
            type="Search"
            name="Search"
            id="Search"
            placeholder="جستجو در همه آگهی ها"
          />
        </label>
        {isDesktop && (
          <div className={`${styles.navLeft} ${styles.flexItem}`}>
            <button className={styles.navbtn}>
              <img src={Person} alt="Person" className={styles.img} />
              <span>دیوار من</span>
            </button>
            <button className={styles.navbtn}>
              <img src={chatIcon} alt="chatIcon" className={styles.img} />
              <span>چت</span>
            </button>
            <button className={styles.navbtn}>پشتیبانی</button>
            <button 
              className={`${styles.ThemeIcon} ${styles.navbtn}`}
              onClick={() => darkDispatch({type: "DARK"})}
            >
              <img src={ThemeIcon} alt="ThemeIcon"/>
            </button>
            <button className={`${styles.navbtn} ${styles.submitbtn}`}>
              ثبت آگهی
            </button>
          </div>
        )}
      </nav>
      {!show && <NavbarCategory />}
    </div>
  );
};
export default Navbar;
