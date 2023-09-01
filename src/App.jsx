//style
import styles from './App.module.scss'

//components
import Main from './Container/Main/Main';
import Aside from './Container/Asidebar/Aside';
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
            <Aside />
            <Main />
          </Layout>
      </div>
  );
}

export default App;
