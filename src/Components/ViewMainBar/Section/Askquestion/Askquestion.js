import React from 'react';
import { useState } from 'react';
import './Askquestion.css'

const Askquestion = () => {
     const [question,setQuestion] =useState("");
     const theQuestionIs = (e) =>{
         setQuestion(e.target.value);
     }
     
    return (
        <div class="text_area_container">
            <textarea onChange={(e)=>theQuestionIs(e)} rows="5" >
            </textarea>
            <button className='btn btn-primary mt-3'>Submit</button>
        </div>
    );
};

export default Askquestion;