import React from 'react';
import App from './App';
import { Outlet } from 'react-router-dom';
import Foooter from './Components/Foooter';
import Header from './Components/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foooter></Foooter>
        </div>
    );
};

export default Root;