import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import MeanSection from '../MeanSection/MeanSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default Home;