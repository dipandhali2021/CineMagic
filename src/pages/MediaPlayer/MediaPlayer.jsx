import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Box, Skeleton, rgbToHex } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import { FaDownload } from "react-icons/fa";
import { useSelector } from "react-redux";
const MediaPlayer = () => {
  const { mediaType, id } = useParams();
  const [background, setBackground] = useState();
  const { data, loading, error } = useFetch(`/${mediaType}/${id}`);
  const { data: recommend, loading: recommendLoad } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );
  const { url } = useSelector((state) => state.home);
console.log(data)
  const bg = url.backdrop + data?.backdrop_path;

  const [open, setOpen] = useState(false);
const [showButton,setShowButton] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { scrollHeight, clientHeight } = entry.target;
        setShowButton(scrollHeight !== clientHeight);
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, [id]);
  const paraStyle = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    
  };
  return (
    <div className="body">
      <Navbar />
      <ContentWrapper>
        <div className="video-box">
          <div className="background">
            <img src={bg} />
          </div>
          <div className="opacity-layer"></div>
          <div className="left-box">
            <div className="mediaPlayer">
              {!loading ? (
                <iframe
                  src={`https://vidsrc.to/embed/${mediaType}/${data?.id}`}
                  width="900"
                  height="600"
                  allowfullscreen="true"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "rgb(255, 255, 255, 0.096)",
                    backdropFilter: blur("5px"),
                  }}
                ></iframe>
              ) : (
                <div>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={900}
                    height={600}
                  />
                </div>
              )}
            </div>
            <div className="next-ep"></div>
          </div>
          <div className="right-box">
            <div className="movie-details">
              <div className="title">{data?.title}</div>
              <div className="genres">
                {data?.genres?.map((genre) => (
                  <span>{genre?.name}</span>
                ))}
                <div className="rating">
                  Rated: {Number(data?.vote_average).toFixed(1)}
                </div>
              </div>
              <div className="overview-head">Overview:</div>
              <div ref={ref} style={open?null:paraStyle} className="overview">
                {data?.overview}
              </div>
              {showButton && 
              
             ( <div className="button-box">
              <button onClick={() => setOpen(!open)}>
                {open ? "Read Less":"Read More"  }
              </button>
             </div>)
              }
            </div>
            <div className="recommendation">
              <div className="recommendation-title">Recommendations</div>

              <div className="known-box">
                <div className="left-box-known">
                  {recommend?.results?.map((item) => {
                    const piscure = url.poster + item?.poster_path;
                    return (
                      <div className="poster-container">
                        {!loading ? (
                          <div className="poster">
                            {!recommendLoad ? (
                              <img src={piscure} />
                            ) : (
                              <Skeleton
                                variant="rounded"
                                width={160}
                                height={250}
                              />
                            )}
                          </div>
                        ) : (
                          <Skeleton
                            variant="rounded"
                            width={160}
                            height={250}
                          />
                        )}
                        {!recommendLoad ? (
                          <div className="poster-name">
                            {String(item?.title)}
                          </div>
                        ) : (
                          <Skeleton variant="rounded" width={160} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MediaPlayer;
