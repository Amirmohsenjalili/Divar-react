import React, { useContext } from "react";

//img
import logo from "../../assets/images/logo.svg";
import loc from "../../assets/images/location.svg";
import ChevronDown from "../../assets/images/ChevronDown.svg";
import search from "../../assets/images/Search.svg";
import Person from "../../assets/images/Person.svg";
import chatIcon from "../../assets/images/chat.svg";
import ThemeIcon from '../../assets/images/moon.png';

//components
import NavbarCategory from "./components/NavbarCategory";

//hooks
// import useIsDesktop from "../../hooks/useIsDesktop";

//styles
import styles from "./styles.module.scss";

//atoms
import Buttons from "../../components/atoms/Button/Buttons";
import Input from "../../components/atoms/Input/Input";

//context
import { CategoryContext } from "../../context/CategotyContextProvider";
import { ThemeContext } from "../../context/ThemeContextProvider";

const Navbar = () => {

  // const isDesktop = useIsDesktop()
  const {show, dispatch} = useContext(CategoryContext)
  const {dark, darkDispatch} = useContext(ThemeContext)

  return ( 
    <div className={!dark ? `${styles.dark} ${styles.navbar} ' sticky bg-white z-10 top-0 '` : `${styles.navbar} ' sticky bg-white z-10 top-0 '`}>
      <nav className='justify-center flex items-center h-14 text-xs w-full md:justify-between'>
        {/* {isDesktop && ( */}
          <div className={`${styles.navbar__section} ' hidden items-center h-14 text-xs gap-1.5 md:flex '`}>
            <Buttons  className={`${styles.navbar__button} ' h-12	w-12 mx-2 opacity-100 '`}>
              <img src={logo} alt="logo" className={`${styles.navbar__logo} ' h-12	w-12 mx-2 opacity-100 '`}/>
            </Buttons>
            <hr className={`${styles.navbar__divider} ' inline-block h-6 w-px box-border mr-2.5 '`} />
            <Buttons  className={`${styles.navbar__button} ' text-xs h-10 items-center p-4 opacity-60 hover:rounded hover:bg-gray-100 hover:font-semibold text-sm font-semibold mr-0 text-zinc-700 ' ${styles.navbar__button_location}`}>
              <img src={loc} alt="loc" className=' w-4 mx-2 text-gray-400 ' />
              <span>تهران</span>
            </Buttons>
            <Buttons 
               className={`${styles.navbar__button} ' ml-2 h-10 items-center p-2.5 opacity-60 hover:rounded hover:bg-gray-100 hover:font-semibold font-semibold  text-zinc-700 '`}
              onClick={() => dispatch({type: "SHOW"})}>
              <span>دسته ها</span>
              <img src={ChevronDown} alt="ChevronDown" className='w-4 mx-2 text-gray-400' />
            </Buttons>
          </div>
        {/* )} */}
        <div className={`${styles.navbar__section} ' flex items-center gap-52	'`}>
          <label 
            className={`' items-center flex gap-2 h-10 px-2 rounded ' ${styles.navbar__label}`}
            onclick="document.getElementById('Search').focus(); return false;">
            <img src={search} alt="search" className='w-4 mx-2 text-gray-400' />
            <Input 
              className=' w-full outline-none '
              type="Search"
              name="Search"
              id="Search"
              placeholder="جستجو در همه آگهی ها"/>
          </label>
          {/* {isDesktop && ( */}
            <div className='hidden items-center justify-between h-14 text-xs gap-1.5 lg:flex'>
              <Buttons className={`${styles.navbar__button} ' text-xs h-10 items-center p-4 opacity-60 hover:rounded hover:bg-gray-100 hover:font-semibold '`}>
                <img src={Person} alt="Person" className='w-4 mx-2 text-gray-400' />
                <span>دیوار من</span>
              </Buttons>
              <Buttons className={`${styles.navbar__button} ' text-xs h-10 items-center p-4 opacity-60 hover:rounded hover:bg-gray-100 hover:font-semibold '`}>
                <img src={chatIcon} alt="chatIcon" className='w-4 mx-2 text-gray-400' />
                <span>چت</span>
              </Buttons>
              <Buttons className={`${styles.navbar__button} ' text-xs h-10 items-center p-4 opacity-60 hover:rounded hover:bg-gray-100 hover:font-semibold '`}>
                پشتیبانی
              </Buttons>
              <Buttons className={`${styles.navbar__button__theme} ' bg-white px-2 font-semibold h-10 items-center mx-3.5 hover:bg-gray-200 '`} onClick={() => darkDispatch({type: "DARK"})}>
                <img src={ThemeIcon} alt="ThemeIcon" className=" w-8 "/>
              </Buttons>
              <Buttons className={`' font-bold h-10 items-center mx-3.5 opacity-100 text-white px-4 m-4 rounded hover:bg-red-900 ' ${styles.navbar__submitButton}`}>
                ثبت آگهی
              </Buttons>
            </div>
          {/* )} */}
        </div>
      </nav>
      {!show && <NavbarCategory />}
    </div>
  );
};
export default Navbar;
