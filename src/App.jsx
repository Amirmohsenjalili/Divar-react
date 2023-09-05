//style
import styles from './App.module.scss'

//components
import Main from './Container/Main/Main';
import Side from './Container/Sidebar/Side';
import Layout from './Layout/indext';
import Navbar from './Layout/Header/indext';

//redux
import { useSelector } from 'react-redux';

function App() {
  
  const dark = useSelector((state) => state.theme.dark)
  return (
  
      <div className={dark ? styles.dark : styles.app}>
          <Layout>
            <Navbar />
            <Side />
            <Main />
          </Layout>
      </div>
  );
}

export default App;
