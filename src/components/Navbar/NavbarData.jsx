import React from 'react'
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { AiFillHome,AiOutlineCompass,AiOutlineClockCircle,AiOutlineStar} from "react-icons/ai";
import { BsPeople,BsAlarm,BsBookmarkDash,BsDownload} from "react-icons/bs";

export const menu = [
    {
      path: "/",
      name: "Home",
      icon: <AiFillHome />,
    },
    {
      path: "/discovery/movie",
      name: "Discovery",
      icon: <AiOutlineCompass />,
    },
    {
      path: "/community",
      name: "Community",
      icon: <BsPeople />,
    },
    {
      path: "/coming-soon",
      name: "Coming Soon",
      icon: <BsAlarm />,
    },
  ]

  export const Library= [
    {
      path: "/recent",
      name: "Recent",
      icon: <AiOutlineClockCircle />,
    },
    {
      path: "/bookmarked",
      name: "Bookmarked",
      icon: <BsBookmarkDash />,
    },
    {
      path: "/top-rated",
      name: "Top Rated",
      icon: <AiOutlineStar />,
    },
    {
      path: "/downloaded",
      name: "Downloaded",
      icon: <BsDownload />,
    },
  ]

  

  export const miscellaneous =[
    {
      path: "/settings",
      name: "Settings",
      icon: <FiSettings />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <BiHelpCircle />,
    },

  ]

  export const Streaming= [
    {
      path: "/netflix",
      name: "Netflix",
      icon: <img src="../src/assets/images/icons8-netflix.svg" alt="not-found" />,
    },
    {
      path: "/disney-plus",
      name: "Disney PLus",
      icon: <img src="../src/assets/images/icons8-disney-plus.svg" alt="not-found" />,
    },
    {
      path: "/amazon-prime",
      name: "Amazon Prime",
      icon: <img src="../src/assets/images/icons8-amazon-prime-video.svg" alt="not-found" />,
    },
    {
      path: "/google-play",
      name: "Google Play",
      icon: <img src="../src/assets/images/icons8-google-play.svg" alt="not-found" />,
    },
    
  ]


 