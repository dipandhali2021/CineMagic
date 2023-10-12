import React, { useEffect, useState } from "react";
import Carousel from "../../carousel-backdrop/carouselB";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../../utils/api";
import "./style.scss";
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
      <h2>Bookmarked</h2>
    <div className="bookmarked">
      <div className="carousel-Bookmark">
        {carouselData?.map((item) => {
          const posterUrl = url.poster + item.backdrop_path;
          return (
            <div className="carousel-Items">
              <div className="posterBlock-backdrop">
                <img src={posterUrl} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
</>
  );
};
export default Bookmarked;
