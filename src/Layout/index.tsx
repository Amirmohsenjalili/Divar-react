import { useSelector } from 'react-redux';
import { Props } from './index.types';

// redux
import styles from './dark.module.scss'

const Layout: React.FC<Props> = ({children}) => {
const dark = useSelector((state: Props) => state.theme?.dark)

   return (
        <div className={dark ? styles.dark : ""}>{children}</div>
   )
}

export default Layout;