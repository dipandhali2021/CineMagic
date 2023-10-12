import React, { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentWrapper from "../content-wrapper/ContentWrapper";

import { useDispatch } from "react-redux";
import "./style.scss";

import dayjs from "dayjs";
import { Alert, Skeleton,  Snackbar } from "@mui/material";
import { getUpdatedList } from "../../store/updateSlice";

const CarouselB = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const { mediaType } = useParams();
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [clickedId, setClickedId] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    setOpen(true);
    const updatedList = [...listData, id];

    dispatch(getUpdatedList(updatedList));
    setListData(updatedList);
    setClickedId(id);


  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bigger">
       
      <div className="carousel-backdrop">
        <ContentWrapper>
          <div className="left-known-box"></div>
          {!loading ? (
            <div className="carouselItems" ref={carouselContainer}>
              {data?.map((item) => {
                const posterUrl = url.poster + item.backdrop_path;
                return (
                  <div key={item.id} className="carouselItem-backdrop">
                    {!loading ? (
                      <div className="posterBlock-backdrop">
                        <img src={posterUrl} />
                      </div>
                    ) : (
                      <Skeleton variant="rounded" width={400} height={225} />
                    )}

                    <div className="details-backdrop">
                      {!loading ? (
                        <div className="movie-name">
                          <h3>{item.title || item.name}</h3>
                        </div>
                      ) : (
                        <Skeleton variant="rounded" width={350} height={22.5} />
                      )}
                      <div className="release-date">
                        {!loading ? (
                          dayjs(
                            item.release_date || item.first_air_date
                          ).format("YYYY")
                        ) : (
                          <Skeleton
                            variant="rounded"
                            width={350}
                            height={18.5}
                          />
                        )}
                      </div>

                      {!loading ? (
                        <div className="flex-details">
                          <div className="rating">
                            <div className="imdb">
                              <img
                                src="../src/assets/images/imdb.png"
                                alt="not found"
                              />
                            </div>
                            {Number(item.vote_average).toFixed(1)} rating
                          </div>

                          <div className="watch-now">
                            <Link to={`/home/${mediaType}/${item.id}`}>
                              <button className="watch-button">
                                Watch Now
                              </button>
                            </Link>
                            <div className="plus">
                              {
                                <AiOutlinePlus
                                  onClick={() => handleClick(item.id)}
                                  className="plus-icon"
                                />
                              }

                              <Snackbar
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "center",
                                }}
                                open={open}
                                autoHideDuration={3000}
                                onClose={handleClose}
                                sx={{
                                  background:"yellowgreen",
                                  color:"white"
                                  // 
                                }}
                              >
                                <Alert
                                sx={{
                                  background:"yellowgreen",
                                  width: "100%",
                                  color:"white",
                                  fontWeight:"600"
                                }}
                              
                                onClose={handleClose}
                                severity="success"
                                
                              >
                                Bookmarked Added!
                              </Alert>
                                
                              </Snackbar>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Skeleton variant="rounded" width={350} height={35.5} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <Skeleton variant="rounded" width={1240} height={270} />
          )}
        </ContentWrapper>
      </div>
    </div>
  );
};

export default CarouselB;
