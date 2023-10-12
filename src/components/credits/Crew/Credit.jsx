import React from "react";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
import { CgProfile } from "react-icons/cg";
const Credit = ({ dataId }) => {
  const { data: credit, loading, error } = useFetch(`/movie/${dataId}/credits`);
  const crewmember = credit?.crew;


  const castmember = credit?.crew;

  function getObjectWithMaxPopularity(crewmember, pos) {
    let maxPopularity = -Infinity;
    let objectWithMaxPopularity = null;

    crewmember?.forEach((obj) => {
      if (obj.known_for_department === pos && obj.popularity > maxPopularity) {
        maxPopularity = obj.popularity;
        objectWithMaxPopularity = obj;
      }
    });
    return objectWithMaxPopularity;
  }
  function getObjectWithMaxPopularity(castmember, pos) {
    let maxPopularity = -Infinity;
    let objectWithMaxPopularity = null;

    crewmember?.forEach((obj) => {
      if (obj.known_for_department === pos && obj.popularity > maxPopularity) {
        maxPopularity = obj.popularity;
        objectWithMaxPopularity = obj;
      }
    });
    return objectWithMaxPopularity;
  }
  console.log(getObjectWithMaxPopularity(castmember, "Acting")?.name);
  return (
    <div className="credit-box">
      {!(
        getObjectWithMaxPopularity(castmember, "Directing")?.name === undefined
      ) ? (
      <div className="credits">
        <div className="head">
          <CgProfile />
          <h3>Director</h3>
        </div>
        <div>{getObjectWithMaxPopularity(crewmember, "Directing")?.name}</div>
      </div>
      ) : (
        <div></div>
      )}
      {!(
        getObjectWithMaxPopularity(castmember, "Writing")?.name === undefined
      ) ? (
      <div className="credits">
        <div className="head">
          <CgProfile />
          <h3>Writing</h3>
        </div>
        <div>{getObjectWithMaxPopularity(crewmember, "Writing")?.name}</div>
      </div>
      ) : (
        <div></div>
      )}
      {!(
        getObjectWithMaxPopularity(crewmember, "Production")?.name === undefined
      ) ? (
        <div className="credits">
          <div className="head">
            <CgProfile />
            <h3>Production</h3>
          </div>
          <div>
            {getObjectWithMaxPopularity(crewmember, "Production")?.name}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {!(
        getObjectWithMaxPopularity(castmember, "Acting")?.name === undefined
      ) ? (
        <div className="credits">
          <div className="head">
            <CgProfile />
            <h3>Character</h3>
          </div>
          <div>{getObjectWithMaxPopularity(castmember, "Acting")?.name}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Credit;
