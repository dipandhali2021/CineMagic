import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.scss";
import Trending from "../../components/trending/Trending";
import Toprated from "../../components/Top-rated/Toprated";
import useFetch from "../../hooks/useFetch";
import { Skeleton } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";

export default function Home(name,email) {
  // console.log(name,email)
  const [index, setIndex] = useState(0);
  const { url } = useSelector((state) => state.home);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const { mediaType } = useParams();
  const { data, loading, error } = useFetch(`/discover/${mediaType}`);
  
  return (
    <div className="home">
      <div className="background">
        <Carousel fade
        controls={false}
        indicators={false}
          style={{ width: "100vw", height: "100vh" ,position:"absolute",top:"0",left:"0",zIndex:"-17",opacity:"0.6"}}
          activeIndex={index}
          interval={60000}
          onSelect={handleSelect}
        >
          {!loading ? (
            data?.results &&
            data?.results?.map((item) => {
              const posterUrl = url.poster + item.backdrop_path;
              return (
                <Carousel.Item>
                  <img
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      
                    }}
                    src={posterUrl}
                    alt=""
                  />
                  
                </Carousel.Item>
              );
            })
          ) : (
            <Skeleton variant="rounded" width={"100vw"} height={"100vh"} />
          )}
        </Carousel>
      </div>
      {!loading ? (
        <Navbar data={name}  />
      ) : (
        <Skeleton variant="rounded" width={1600} height={90} />
      )}
      {!loading ? (
        <Trending />
      ) : (
        <Skeleton variant="rounded" width={1600} height={366.5} />
      )}
      {!loading ? (
        <Toprated />
      ) : (
        <Skeleton variant="rounded" width={1600} height={406.4} />
      )}
      {!loading ? (
         <Footer/>
      ) : (
        <Skeleton variant="rounded" width={1600} height={406.4} />
      )}
      
    </div>
    
  );
}
