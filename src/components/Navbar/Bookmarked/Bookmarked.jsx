import React from 'react'
import Carousel from "../../carousel-backdrop/carouselB";
import useFetch from '../../../hooks/useFetch';
const Bookmarked = () => {
    const { data, loading } = useFetch("/trending/movie/day");
  
  return (
    <div className="bookmarked">
      <h3>Bookmarked</h3>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Bookmarked