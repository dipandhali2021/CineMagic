import * as url from 'url'
import { Avatar } from '@mui/material'
import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import "./style.scss"
const Cast = ({dataId}) => {
    const { data: credit, loading, error } = useFetch(`/movie/${dataId}/credits`);
    const {url } = useSelector((state)=> state.home)
    const crewmember = credit?.cast;
    console.log(crewmember);
  return (
    <div className='cast-container'>

        <h1>Top Billed Cast</h1>
        <div className="cast-flex">

{crewmember?.map((item)=>{
    const posterUrl = url.poster + item.profile_path
    ;
    return(
        <div className="profile-block">
            
            <Avatar  src={posterUrl} sx={{
                width:"100px",
                height:"100px",
              }}  />
    
              <div className="name">{item.name}</div>
              <div className="post">{item.character}</div>
        </div>
    )
})}
        </div>
                  
                  
                  
        
    </div>
  )
}

export default Cast