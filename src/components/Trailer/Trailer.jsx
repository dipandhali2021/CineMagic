import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import "./style.scss";

const Trailer = ({ dataId }) => {
  const { mediaType } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${dataId}/videos`);
  const [index, setIndex] = useState(0);

  // Handle carousel index change
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Filter for YouTube videos if they exist
  const videos = data?.results?.filter(video => video.site === "YouTube");

  return (
    <div className="trailer-carousel-container">
      {loading ? (
        <Skeleton variant="rounded" width="100%" height="750px" />
      ) : videos?.length ? (
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{ width: "1200px", height: "750px" }}
        >
          {videos.map((video, idx) => (
            <Carousel.Item key={idx}>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                width="100%"
                height="750px"
                title={video.name}
                allowFullScreen
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No trailers available</p>
      )}
    </div>
  );
};

export default Trailer;
