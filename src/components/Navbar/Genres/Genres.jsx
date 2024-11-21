import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

import "./style.scss"

const Genres = () => {
  const { genres } = useSelector((state) => state.home);
  
  const dataArray = Object.keys(genres).map((key) => genres[key]);
  
  const namesArray = dataArray.map((item) => item.name).slice(0, 10);

  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id);
  };
  
  return (
    <>
      <div className="names-container">
        <div className="names-grid">
          {namesArray.map((name, index) => (
            <div key={name} className={`name-item ${selected === index ? "selected" : ""}`} onClick={() => handleClick(index)}>
              <span className={`text-item ${selected === index ? "selectedText" : ""}`}>{name}</span>
              <div className="plus-icon">
                {selected === index ? <AiOutlineCheck/> : <AiOutlinePlus/>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genres;
