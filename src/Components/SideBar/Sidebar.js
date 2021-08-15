import React from 'react';
import Category from './section/Category/Category';
import SideBarNews from './section/SIideBarNews/SideBarNews';
import './SideBar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
           <Category></Category>

           <SideBarNews></SideBarNews>
        </div>
    );
};

export default Sidebar;