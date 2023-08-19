import React, { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./style.scss"
import Trending from "../../components/trending/Trending"
import Toprated from "../../components/Top-rated/Toprated"
import {useMenuOpen} from "../../customHook/useMenuOpen.js"
export default function Home(){
    const [isOpen, toggle] = useMenuOpen();
    
    return(

        <div className="home"  >
            <Navbar 
           
             />
            <Trending/>
            <Toprated/>
            
        </div>
    )
}