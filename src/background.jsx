import React from "react";

import Background_1 from './svg/Background_1.svg';
import Background_2 from './svg/Background_2.svg';
import Background_3 from './svg/Background_3.svg';
import Background_4 from './svg/Background_4.svg';

const MainBackground = () => {
  return(
    <div className="background-svg-wrapper">
      <img src={Background_1} className="background-1"/>
      <img src={Background_2} className="background-2"/>
      <img src={Background_3} className="background-3"/>
      <img src={Background_4} className="background-4"/>
    </div>
  );
}

export default MainBackground