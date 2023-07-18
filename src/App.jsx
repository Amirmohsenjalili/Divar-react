import styles from './App.module.scss'
import Main from './components/templates/Main/Main';
import Asaide from './components/templates/Asidebar/Asaide';
import Layout from './Layout';
import Navbar from './Layout/Header';
import { useContext } from 'react';

//context
import CategotyContextProvider from './context/CategotyContextProvider';
import { ThemeContext } from './context/ThemeContextProvider';


function App() {

  const {dark} = useContext(ThemeContext)
  return (
  
      <div className={!dark ? styles.dark : styles.app}>
        <CategotyContextProvider>
          <Layout>
            <Navbar />
            <Asaide />
            <Main />
          </Layout>
        </CategotyContextProvider>
      </div>
  );
}

export default App;
