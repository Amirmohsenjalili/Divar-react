import { useSelector } from 'react-redux';

// redux
import styles from './dark.module.scss'

const Layout = ({children}) => {

const dark = useSelector((state) => state.theme.dark)

   return (
        <div className={dark && styles.dark}>{children}</div>
   )
}

export default Layout;