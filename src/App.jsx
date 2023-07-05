import styles from './App.module.scss'
import Main from './components/Main';
import Asaide from './components/Asaide';
import Layout from './components/Layout';
import Navbar from './components/Layout/Header';

function App() {
  
  return (
  
    <div className={styles.app}>
      <Layout>
        <Navbar />
        <Asaide />
        <Main />
      </Layout>

    </div>
  );
}

export default App;
