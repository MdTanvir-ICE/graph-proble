import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css'
const TopNav = () => {
   
    const [searchValue,setSearchValue] =useState("");

    const searchText = (e)=>{
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    
    
    
    return (
        <div className='topNav_container'>
            <div className="top_nav ">
                <div className="top_nav_content">
                   
                    <div className="top_nav_logo"><a href="/">ITLOGO</a></div>
                    <form className="search_box">
                        <div className="search_input_field">
                            <input onChange={(e)=>searchText(e)} type="text" value={searchValue} className="search_input" placeholder="Search....." />
                        </div>
                        <button type='submit' className="search_btn"> <i  className="fas fa-search"></i></button>
                    </form>
                    <div className="top_nav_notification">
                         <i className="fas fa-bell"></i>
                    </div>
                    <button className="top_nav_login_btn">Login</button> 
                </div>
            </div>
        </div>
    );
};

export default TopNav;