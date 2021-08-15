import React from 'react';
import Sidebar from '../../Components/SideBar/Sidebar';
import ViewMainBar from '../../Components/ViewMainBar/ViewMainBar';
import '../Home/Home.css';

const SingleView = () => {
    
    return (

    <div className="grid-container">
    
        <Sidebar></Sidebar>
        <ViewMainBar></ViewMainBar>
    <div className="footer">©itlogo</div>
    </div>
    );
};

export default SingleView;