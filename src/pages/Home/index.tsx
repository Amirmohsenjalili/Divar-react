import React from 'react';
import Layout from 'src/Layout/index';
import Navbar from 'src/Layout/Header/index';
import Side from 'src/Container/Sidebar';
import Main from 'src/Container/Main';

const Home: React.FC = () => {
    return (
        <Layout>
            <Navbar />
            <Side />
            <Main />
        </Layout>
    );
};

export default Home;