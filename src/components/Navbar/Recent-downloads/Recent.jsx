import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from 'react-redux';

import "./style.scss";
import MovieThumb from '../../movie-thumb/MovieThumb';
import { Skeleton } from '@mui/material';

const Recent = () => {
  const { data, loading } = useFetch("/trending/movie/day");

  return (
    <div className="recent">
      <div className='container-text'>
        <h2 className='title'>Recent Downloads</h2>
        <span className='text'>
          See all
          <AiOutlineRight className='icon' />
        </span>
      </div>
      {data && data.results && data.results.length > 0 ? (
        <MovieThumb data={data.results[0]} loading={loading} />
      ) : (
        <Skeleton variant="rounded" width={400} height={225} />
      )}
    </div>
  );
}

export default Recent;