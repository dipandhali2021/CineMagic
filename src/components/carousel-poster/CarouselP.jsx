import React, { useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import ContentWrapper from "../content-wrapper/ContentWrapper";

import "./style.scss";
import dayjs from "dayjs";
import { Alert, Skeleton, Snackbar } from "@mui/material";

const CarouselP = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const { mediaType } = useParams();
  const [open, setOpen] = useState(false);
const {page} = useParams();

  
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="bigger">
   
    <div className="carousel">
      <ContentWrapper>
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = url.poster + item.poster_path;

              return (
                <div key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <img src={posterUrl} />
                  </div>
                  <div className="details-backdrop">
                    <div className="rating">
                    <div className="imdb">
                        <div className="rated">{item.vote_average} </div>
                        
                        <img src="../src/assets/images/star.png" alt="" />
                        </div>
                    </div>
                    <div className="down">
                    {/* <div className="movie-name">
                      <h3>{item.title || item.name}</h3>
                    </div>
                    <div className="release-date">
                      {dayjs(item.release_date || item.first_air_date).format(
                        "YYYY"
                      )}
                    </div> */}

                    <div className="flex-details ">
                      <div className="watch-now">
                        <Link to={`/${page}/${mediaType}/${item.id}`}>
                          <button className="watch-button">Watch Now</button>
                        </Link>
                        <div className="plus">
                          <AiOutlinePlus
                            onClick={handleClick}
                            className="plus-icon"
                          />

                          <Snackbar
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
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
                </div>
              );
            })}
          </div>
        ) : (
          <Skeleton variant="rounded" width={1316} height={320} />
        )}
      </ContentWrapper>
    </div>
   
</div>
  );
};
export default CarouselP;
