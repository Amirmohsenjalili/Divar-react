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
// molecules
import Form from "../../components/molecules/Form/Form";
//organisms
import Header from "../../components/organisms/Header/Header";

//context
import { CategoryContext } from "../../context/CategotyContextProvider";
import { ThemeContext } from "../../context/ThemeContextProvider";

const Navbar = () => {

  const isDesktop = useIsDesktop()
  const {show, dispatch} = useContext(CategoryContext)
  const {dark, darkDispatch} = useContext(ThemeContext)

  return (
    <Header className={!dark ? `${styles.dark} ${styles.navHead}` : styles.navHead}>
    {/* <div className={!dark ? `${styles.dark} ${styles.navHead}` : styles.navHead}> */}
      <nav className={`${styles.nav} ${styles.flexItem} ${styles.browse}`}>
        {isDesktop && (
          <Form className={styles.flexItem}>
          {/* <div className={styles.flexItem}> */}
            <Buttons className={styles.logo}>
              <img src={logo} alt="logo" className={styles.logo} />
            </Buttons>
            
            <hr className={styles.divider} />

            {/* <button className={`${styles.navbtn} ${styles.navlocation}`}> */}
            <Buttons className={`${styles.navbtn} ${styles.navlocation}`}>
              <img src={loc} alt="loc" className={styles.img} />
              <span>تهران</span>

            </Buttons>
            {/* </button> */}
            {/* <button
              className={`${styles.navbtn} ${styles.showCategory}`}
              onClick={() => dispatch({type: "SHOW"})}
            > */}
            <Buttons 
              className={`${styles.navbtn} ${styles.showCategory}`}
              onClick={() => dispatch({type: "SHOW"})}
            >
              <span>دسته ها</span>
              <img src={ChevronDown} alt="ChevronDown" className={styles.img} />
            </Buttons>
            {/* </button> */}
          {/* </div> */}
          </Form>

          
        )}
        <Form>
          <label 
            className={styles.navlabel}
            onclick="document.getElementById('Search').focus(); return false;"
          >
            <img src={search} alt="search" className={styles.img} />
            {/* <input
              type="text"
              name="Search"
              id="Search"
              placeholder="جستجو در همه آگهی ها"
            /> */}
            <Input 
              type="Search"
              name="Search"
              id="Search"
              placeholder="جستجو در همه آگهی ها"/>
          </label>
        </Form>
        {isDesktop && (
          // <div className={`${styles.navLeft} ${styles.flexItem}`}>
          <Form className={`${styles.navLeft} ${styles.flexItem}`}>
            {/* <button className={styles.navbtn}> */}
            <Buttons className={styles.navbtn}>
              <img src={Person} alt="Person" className={styles.img} />
              <span>دیوار من</span>
            </Buttons>
            {/* </button> */}
            {/* <button className={styles.navbtn}> */}
            <Buttons className={styles.navbtn}>
              <img src={chatIcon} alt="chatIcon" className={styles.img} />
              <span>چت</span>
            </Buttons>
            {/* </button> */}

            {/* <button className={styles.navbtn}> */}
            <Buttons className={styles.navbtn}>
              پشتیبانی
            </Buttons>
            {/* </button> */}
            {/* <button 
              className={`${styles.ThemeIcon} ${styles.navbtn}`}
              onClick={() => darkDispatch({type: "DARK"})}
            > */}
            <Buttons className={`${styles.ThemeIcon} ${styles.navbtn}`} onClick={() => darkDispatch({type: "DARK"})}>
              <img src={ThemeIcon} alt="ThemeIcon"/>
            </Buttons>
            {/* </button> */}
            {/* <button className={`${styles.navbtn} ${styles.submitbtn}`}> */}
            <Buttons className={`${styles.navbtn} ${styles.submitbtn}`}>
              ثبت آگهی
            </Buttons>
            {/* </button> */}
          {/* </div> */}
          </Form>
        )}
      </nav>
      {!show && <NavbarCategory />}
    {/* </div> */}
    </Header>
  );
};
export default Navbar;
