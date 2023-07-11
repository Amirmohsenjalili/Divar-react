import React, {useContext} from "react";
import styles from './dark.module.scss'

import { ThemeContext } from "../../context/ThemeContextProvider";

const Layout = ({children}) => {

    const {dark} = useContext(ThemeContext)

   return (
        <div className={!dark && styles.dark}>{children}</div>
   )
}

export default Layout;