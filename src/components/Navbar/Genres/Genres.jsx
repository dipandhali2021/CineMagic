import React from "react";
import { useSelector } from "react-redux";

import "./style.scss"

import {AiOutlinePlusCircle} from "react-icons/ai";
const Genres = () => {
  const { genres } = useSelector((state) => state.home);
  
  const dataArray = Object.keys(genres).map((key) => genres[key]);
  
  const namesArray = dataArray.map((item) => item.name).slice(0, 10);;
  
  console.log(namesArray);
  return (
    <>
      <div className="names-container">
      <div className="names-grid">
        {namesArray.map(name => (
          <div key={name} className="name-item">
            {name}
            <div className="plus-icon">
            <AiOutlinePlusCircle/>
          </div>
          </div>
          
        ))}
      </div>
      </div>
    </>
  );
};

export default Genres;
