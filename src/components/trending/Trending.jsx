import {  useState } from "react";
import React from "react";
import ContentWrapper from "../content-wrapper/ContentWrapper";
import { BsFillCaretRightFill } from "react-icons/bs";
import useFetch from "../../hooks/useFetch.js";

import "./style.scss";

import Carousel from "../carousel-backdrop/carouselB";
import { Link, Navigate, useParams } from "react-router-dom";

const Trending = () => {
const{mediaType}= useParams();
  const { data, loading ,error} = useFetch(`/trending/${mediaType}/day`);



 if (error) {
    return <Navigate to="*" />;
  }


  return (
    <div className="carousel">
      <ContentWrapper>

        <div className="blurry-box">

        <div className="trending-bar">
          <h2>Trending</h2>
          <Link to={'*'} className="a"  >
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

export default Trending;
