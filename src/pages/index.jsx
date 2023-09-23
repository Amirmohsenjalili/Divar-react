import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import CardsDetails from './CardsDetails';
import NotFound from './NotFound';

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/CardsDetails/:id' element={<CardsDetails />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </div>
    );
};

export default Pages;