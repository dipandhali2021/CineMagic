import React from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Trailer = ({dataId}) => {
  const{mediaType}=useParams()
  const {data,loading} = useFetch(`/${mediaType}/${dataId}/videos`)

  
  const source = `https://www.youtube.com/embed/${data?.results[0]?.key}`;

  return (
    <div className="Trailer">
      
      <iframe src={source}  width="1200px"
        height= "750px" allowfullscreen="true"></iframe>
    </div>
    
  );
};

export default Trailer;
