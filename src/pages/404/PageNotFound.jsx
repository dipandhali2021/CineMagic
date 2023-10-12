import React from 'react'
import "./style.scss"
import Lottie from 'lottie-react'
import PageNot from "../../assets/images/404/animation_llp1qyau.json"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  
  return (
    <div  style={{backgroundColor:"white"}}className='PageNotFound'>
      
        
        <Lottie animationData={PageNot} style={{width: "100%", height:"90%" }} loop={true} autoplay={true} />
        <div className="home-button">
      <Link to="/home/movie">
      
         <button className='btn'>Go Home</button>
      </Link>
        </div>
    </div>
  )
}

export default PageNotFound