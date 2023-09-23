import React from 'react';
import Layout from '../../Layout/indext';
import Navbar from '../../Layout/Header/indext';
import Side from '../../Container/Sidebar';
import Main from '../../Container/Main';

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <Side />
            <Main />
        </Layout>
    );
};

export default Home;