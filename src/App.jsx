import { Navigate, Route, Routes } from 'react-router-dom';

//style
import styles from './App.module.scss'

//components
// import Main from './Container/Main/Main';
// import Side from './Container/Sidebar/Side';
import Container from './Container/indext';
import Layout from './Layout/indext';
import Navbar from './Layout/Header/indext';
import CardDetails from './Container/cardDetails/CardDetails';

//redux
import { useSelector } from 'react-redux';

function App() {
  
  const dark = useSelector((state) => state.theme.dark)
  return (
  
      <div className={dark ? styles.dark : styles.app}>
          <Layout>
            <Navbar />
            <Routes>
              <Route path='/' element={<Container />}/>
              <Route path='/CardDetails/:id' element={<CardDetails />}/>
              <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
          </Layout>
      </div>
  );
}

export default App;
