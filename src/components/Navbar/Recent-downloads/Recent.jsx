import React from 'react'
import Carousel from "../../carousel-backdrop/carouselB";
import useFetch from '../../../hooks/useFetch';
const Recent = () => {
  const { data, loading } = useFetch("/trending/movie/day");
  return (
    <div className="recent">
      <h2>Recent Downloads</h2>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Recent;