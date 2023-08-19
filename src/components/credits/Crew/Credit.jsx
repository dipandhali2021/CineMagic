import React from "react";
import useFetch from "../../../hooks/useFetch";

const Credit = ({ dataId }) => {
  const { data: credit, loading, error } = useFetch(`/movie/${dataId}/credits`);
  const crewmember = credit?.crew;
  // console.log(crewmember);


  function getObjectWithMaxPopularity(crewmember, pos) {
        let maxPopularity = -Infinity;
        let objectWithMaxPopularity = null;

        crewmember?.forEach(obj => {
    if (
      obj.known_for_department === pos &&
      obj.popularity > maxPopularity
    ) {
      maxPopularity = obj.popularity;
      objectWithMaxPopularity = obj;
    }
  });
  return objectWithMaxPopularity;
  }
//   const pos = 'Sound';
//   const objectWithMaxPopularity = getObjectWithMaxPopularity(crewmember, pos);
//   console.log(objectWithMaxPopularity?.name)

 
  return (
    <div>
      <div className="director">
        <h2>Director</h2>
        <div >{getObjectWithMaxPopularity(crewmember, 'Directing')?.name}</div>
      </div>

      <div className="Srceenplay">
        <h2>Screenplay</h2>
        <div >{getObjectWithMaxPopularity(crewmember, 'Writing')?.name}</div>
      </div>
     
    </div>
  );
};

export default Credit;
