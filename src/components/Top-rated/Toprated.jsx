import { useEffect, useRef, useState } from "react";
import React from "react";
import ContentWrapper from "../content-wrapper/ContentWrapper";
import { BsFillCaretRightFill } from "react-icons/bs";
import useFetch from "../../hooks/useFetch.js";

import "./style.scss";

import Carousel from "../carousel-poster/CarouselP";
import { Link, useParams } from "react-router-dom";

const Toprated = () => {
  const {mediaType} = useParams()
  const { data, loading } = useFetch(`/${mediaType}/top_rated`);

  

  return (
    <div className="carousel">
      <ContentWrapper >
        <div className="blurry-box">
        <div className="top-rated-bar">
            <div className="name-bar">
          <h2>Top Rated</h2>
          <img src="../src/assets/images/star.png" alt="" />

            </div>
          <Link to={'*'}  className="see-all">
            <h3>see all</h3>
            <BsFillCaretRightFill />
          </Link>
        </div>
        <Carousel  data={data?.results} loading={loading} />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Toprated;