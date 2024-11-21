import React, { useEffect, useState } from "react";
import Carousel from "../../carousel-backdrop/carouselB";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../../utils/api";
import "./style.scss";
import { AiOutlineRight } from "react-icons/ai";
import MovieThumb from "../../movie-thumb/MovieThumb";

const Bookmarked = () => {
  const { mediaType } = useParams();
  const { list } = useSelector((state) => state.list);
  const [carouselData, setCarouselData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    getListData();
  }, [list]);

  const getListData = async () => {
    let promises = [];

    list.forEach((id) => {
      promises.push(fetchDataFromApi(`/${mediaType}/${id}`));
    });
    const data = await Promise.all(promises);
    setCarouselData(data);
    // console.log(data);
  };

  return (
    <>
      <div className='container-text'>
        <h2 className='title'>Recent Downloads</h2>
        <span className='text'>
          See all
          <AiOutlineRight className='icon' />
        </span>
      </div>
    <div className="bookmarked">
      {carouselData && carouselData.length > 0 && (
        <MovieThumb data={carouselData[0]} loading={false} />
      )}
    </div>
</>
  );
};
export default Bookmarked;
