import { useEffect, useRef, useState } from "react";
import React from "react";
import ContentWrapper from "../content-wrapper/ContentWrapper";
import { BsFillCaretRightFill } from "react-icons/bs";
import useFetch from "../../hooks/useFetch.js";

import "./style.scss";

import Carousel from "../carousel-poster/CarouselP";

const Toprated = () => {
  const carouselContainer = useRef();
  const { data, loading } = useFetch("/movie/top_rated");

  

  return (
    <div className="carousel">
      <ContentWrapper>
        <div className="top-rated-bar">
            <div className="name-bar">
          <h2>Top Rated</h2>
          <img src="../src/assets/images/star.png" alt="" />

            </div>
          <a href="#" target="_blank" className="see-all">
            <h3>see all</h3>
            <BsFillCaretRightFill />
          </a>
        </div>
        <Carousel data={data?.results} loading={loading} />
      </ContentWrapper>
    </div>
  );
};

export default Toprated;