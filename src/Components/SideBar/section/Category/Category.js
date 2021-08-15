import React from 'react';

const Category = () => {
    return (
        <div className="sidebar_category">
            <li><a href="/create"><button className="btn btn-outline-primary">Create post</button></a><a style={{marginLeft:'2px'}}href="/profile"><button className="btn btn-outline-primary">Profile</button></a></li>
            <li><a href="/login"><button className="btn btn-outline-primary">Login</button></a><a style={{marginLeft:'2px'}}href="signup"><button className="btn btn-outline-primary">sign up</button></a></li>
            <li><a href="#">INTERNET</a></li>
            <li><a href="#">TOR</a></li>
            <li><a href="#">LINUX</a></li>
            <li><a href="#">WINDOWS</a></li>
            <li><a href="#">PROTECTED TEXTS</a></li>
            <li><a href="#">SECURITY</a></li>
            <li><a href="#">INTERNET</a></li>
            <li><a href="#">PROTECTED TEXTS</a></li>
            <li><a href="#">SECURITY</a></li>
            <li><a href="#">INTERNET</a></li>
        </div>
    );
};

export default Category;