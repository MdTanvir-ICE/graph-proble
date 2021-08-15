import React from 'react';
import MainBar from '../../Components/MainBar/MainBar';
import Sidebar from '../../Components/SideBar/Sidebar';
import './Home.css';

const Home = () => {
    return (
        <div className="grid-container">
        
           <Sidebar></Sidebar>
           <MainBar></MainBar>
        <div className="footer">©itlogo</div>
    </div>
    
    );
};

export default Home;