import React from 'react';
import ImportantContent from '../ImprotantContent/ImportantContent';
import NewsCard from '../NewsCard/NewsCard';

import Carousal from './Carousal/Carousal';

const MainBar = () => {

    return (
        <div className="main_bar">
          <div style={{padding:'5px'}}></div>
          <Carousal></Carousal>
          <div style={{padding:'5px'}}className="mb-3"></div>
          <ImportantContent></ImportantContent>
          <div style={{padding:'5px'}} className="mb-3"></div>
          <NewsCard></NewsCard>
        </div>
    );
};

export default MainBar;