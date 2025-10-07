import React from 'react';
import NavBar from '../../components/Header/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div data-theme="light">
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;