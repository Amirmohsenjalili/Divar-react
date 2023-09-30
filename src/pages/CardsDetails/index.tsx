import React from 'react';
import Layout from 'src/Layout/index';
import Navbar from 'src/Layout/Header/index';
import CardDetails from 'src/Container/cardDetails';

const CardsDetails: React.FC = () => {
    return (
        <Layout>
            <Navbar />
            <CardDetails />
        </Layout>
    );
};

export default CardsDetails;