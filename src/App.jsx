import styles from './App.module.scss'
import Main from './Container/Main/Main';
import Aside from './Container/Asidebar/Aside';
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
            <Aside />
            <Main />
          </Layout>
        </CategotyContextProvider>
      </div>
  );
}

export default App;
