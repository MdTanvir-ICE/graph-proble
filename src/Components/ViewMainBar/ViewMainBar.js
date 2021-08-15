import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import QuesAns from '../Ques&Ans/QuesAns';
import Askquestion from './Section/Askquestion/Askquestion';
import MainBlog from './Section/mainBlog/MainBlog';
import './viewMainBar.css';
const ViewMainBar = () => {
    return (
        <div className="main_bar">
            <div className="view_wrapper">
                <MainBlog></MainBlog>
                <div className="asked-bar bg-primary text-center" style={{color:'white'}}>
                  <h5>  Question asked and answer on this topic</h5>
                </div>
                <QuesAns></QuesAns>
                <div className="asked-bar bg-primary text-center" style={{color:'white'}}>
                    Ask question if you have question on this topic
                </div>
                <Askquestion></Askquestion>
                <NewsCard></NewsCard>
           </div>
         
          
        </div>
    );
};

export default ViewMainBar;