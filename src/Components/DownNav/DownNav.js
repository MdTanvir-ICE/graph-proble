import React from 'react';
import './DownNav.css'

const DownNav = () => {
    
    const style={
        display: 'flex',
        justifyContent:'space-between'
    }
   
    return (
    <>  
        <div className="itBlog_down_nav_container">
           <input type="checkbox" id="check" /> 
            <div class="itBlog_down_nav" >
                <div class="itBlog_down_nav_button">
                    <label for="check" class="bar">
                    <span class="fa fa-bars" id="bars"></span>
                    <span class="fa fa-times" id="times"></span>
                    </label>
                    <p class="control_humburger">Catagories</p>
                </div>
                <p>16 january friday 2021</p>
                <ol>
                    <li style={{display: 'flex',
        justifyContent:'space-between'}}className="d-flex justify-content-center"><a href="/create"><button className="btn btn-outline-info">Create post</button></a><a style={{marginLeft:'2px'}}href="/profile/"><button className="btn btn-outline-info">Profile</button></a></li>
                    <li style={{display: 'flex',
        justifyContent:'space-around'}} className="d-flex justify-content-center"><a href="/login"><button className="btn btn-outline-info">Sign in</button></a><a style={{marginLeft:'2px'}}href="/signup"><button className="btn btn-outline-info">Sign Up</button></a></li>

                    <li><a href="#">INTERNET</a></li>
                    <li><a href="#">TOR</a></li>
                    <li><a href="#">LINUX</a></li>
                    <li><a href="#">WINDOWS</a></li>
                    <li><a href="#">PROTECTED TEXTS</a></li>
                    <li><a href="#">SECURITY</a></li>
                    <li><a href="#">INTERNET</a></li>
                    
                </ol>
                <select>
                    <option value="1">Bangla</option>
                    <option value="2">English</option>
                </select>
           </div>
        </div>
    </>
    );
};

export default DownNav;