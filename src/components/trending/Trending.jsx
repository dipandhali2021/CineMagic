import { useEffect, useRef, useState } from "react";
import React from "react";
import ContentWrapper from "../content-wrapper/ContentWrapper";
import { BsFillCaretRightFill } from "react-icons/bs";
import useFetch from "../../hooks/useFetch.js";

import "./style.scss";

import Carousel from "../carousel-backdrop/carouselB";

const Trending = () => {

  const { data, loading } = useFetch("/trending/movie/day");

  

  return (
    <div className="carousel">
      <ContentWrapper>
        <div className="trending-bar">
          <h2>Trending</h2>
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

export default Trending;
