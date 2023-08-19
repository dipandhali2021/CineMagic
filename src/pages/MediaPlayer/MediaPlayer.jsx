import React from 'react'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const MediaPlayer = () => {
    const {id} = useParams();
    const {data,loading,error} = useFetch(`/movie/${id}`)
    console.log(data)
  return (
    <div>

{
    !loading?(<iframe src={`https://vidsrc.to/embed/movie/${data?.id}`} width="1000" height="500" allowfullscreen="true"></iframe>):(<div><Skeleton
    animation="wave"
    variant="rectangular"
    width={1000}
    height={500}
  /></div>)
}


        
        
    </div>
  )
}

export default MediaPlayer