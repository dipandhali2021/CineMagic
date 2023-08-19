import React, { useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentWrapper from "../content-wrapper/ContentWrapper";

import "./style.scss";
import dayjs from "dayjs";
import { Alert, Button, Skeleton, Snackbar } from "@mui/material";

const CarouselB = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);

  const [open,setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="carousel-backdrop">
      <ContentWrapper>
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = url.poster + item.backdrop_path;

              return (
                <div key={item.id} className="carouselItem-backdrop">
                  <div className="posterBlock-backdrop">
                    <img src={posterUrl} />
                  </div>

                  <div className="details-backdrop">
                    <div className="movie-name">
                      <h3>{item.original_title}</h3>
                    </div>
                    <div className="release-date">
                      {dayjs(item.release_date || item.first_air_date).format(
                        "YYYY"
                      )}
                    </div>

                    <div className="flex-details">
                      <div className="rating">
                        <div className="imdb">
                          <img
                            src="../src/assets/images/imdb.png"
                            alt="not found"
                          />
                        </div>
                        {item.vote_average} rating
                      </div>

                      <div className="watch-now">
                        <Link to={`/movie/${item.id}`}>
                          <button className="watch-button">Watch Now</button>
                        </Link>
                        <div className="plus">
                          <AiOutlinePlus  onClick={handleClick} className="plus-icon" />
                          
                          <Snackbar
                           anchorOrigin={{  vertical: 'bottom',  horizontal: 'center'}}
                            open={open}
                            autoHideDuration={3000}
                            onClose={handleClose}
                           
                          >
                            <Alert
                              onClose={handleClose}
                              severity="success"
                              sx={{ width: "100%" }}
                            >
                              Added to Bookmarked!
                            </Alert>
                          </Snackbar>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={400}
              height={250}
            />
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default CarouselB;
