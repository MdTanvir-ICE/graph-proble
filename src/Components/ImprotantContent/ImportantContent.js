import React from 'react';
import './importantContent.css';
const ImportantContent = () => {
    return (
        <div className="important_card_wrapper">
        <div className="card_content">
            <div className="card_img">
            <img src="https://images.unsplash.com/photo-1623417764988-a70d37ccd701?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1417&q=80" alt="Several hands holding beer glasses"/>
           
               </div>
           
                <p>
                 <a href="/viewnews">   ইলেকট্রিক গাড়ি বিপ্লব: যেভাবে স্মার্টফোন বিপ্লবের পথে হাঁটছে গাড়ি ইন্ডাস্ট্র</a>
                </p>
           
        </div>

        <div className="card_content">
            <div className="card_img">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt="Several hands holding beer glasses"/>
               
            </div>
            <p>
               <a href='/viewnews'> ক্রিপ্টোকারেন্সির জগতে</a>
            </p>
            
        </div>
        
    </div>
    );
};

export default ImportantContent;