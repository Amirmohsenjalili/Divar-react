//style
import styles from './App.module.scss'

//components
import Pages from './pages'

//redux
import { useSelector } from 'react-redux';

import { state } from "./App.types";

const App: React.FC = () => {
  const dark = useSelector((state: state) => state.theme.dark)
  return (
      <div className={dark ? styles.dark : styles.app}>
          <Pages />
      </div>
  );
}

export default App;
