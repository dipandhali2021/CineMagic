import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import "./style.scss";
import ContentWrapper from "../content-wrapper/ContentWrapper";

import {
  Dialog,
  DialogActions,
  IconButton,
  Skeleton,
  Tooltip,
  withTheme,
} from "@mui/material";
import dayjs from "dayjs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  AiOutlinePlus,
  AiOutlineUnorderedList,
  AiFillHeart,
  AiFillStar,
} from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Credit from "../credits/Crew/Credit";
import Cast from "../credits/Cast/Cast";
import CloseIcon from "@mui/icons-material/Close";
import Trailer from "../Trailer/Trailer";

const BasicDetails = (data, loading, error) => {
  const [background, setBackground] = useState();
  const rating = Number(data?.data?.vote_average).toFixed(1);
  const { mediaType, page } = useParams();

  if (error) {
    return <Navigate to="*" />;
  }
  const { url } = useSelector((state) => state.home);

  const genre = data?.data?.genres;
  const country = data?.data?.production_countries[0]?.iso_3166_1;

  const dataId = data?.data?.id;
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [style, setStyle] = useState({ transition: "all 1s" });
  const [heartColor, setHeartColor] = useState("white");
  const [BookmarkColor, setBookmarkColor] = useState("white");
  const borderOut = (element) => {
    setHover(false);
    setStyle({
      transition: "all 1s",
    });
  };

  const handleClick = () => {
    if (heartColor === "white") {
      setHeartColor("red");
    } else {
      setHeartColor("white");
    }
  };
  const handleClickB = () => {
    if (heartColor === "white") {
      setBookmarkColor("yellow");
    } else {
      setBookmarkColor("white");
    }
  };

  const genreNames = genre
    ? Object.values(genre).map((genre) => genre.name)
    : [];

  const toHoursAndMinutes = () => {
    const hours = Math.floor(data?.data?.runtime / 60);
    const minutes = data?.data?.runtime % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  useEffect(() => {
    const bg = url.backdrop + data?.data?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div className="main-details-container">
      <div className="backdrop-img">
        {background ? (
          <img src={background} alt="not found" />
        ) : (
          <div className="loadingSkeleton">
            <Skeleton variant="rounded" width={10000} height={600} />
          </div>
        )}
      </div>
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="poster-block">
          <div className="poster">
            {data?.data?.poster_path ? (
              <img src={url.poster + data?.data?.poster_path} />
            ) : (
              <div className="loadingSkeleton">
                <Skeleton variant="rectangular" width={280} height={400} />
              </div>
            )}
          </div>

          <div className="poster-details">
            <div className="movie-name ">
              {data?.data?.title ? (
                <div>
                  {data?.data?.title}(
                  {dayjs(data?.data?.release_date).format("YYYY")})
                </div>
              ) : (
                <Skeleton variant="rounded" width={800} height={66.5} />
              )}
            </div>
            <div className="flex-box-poster">
              {data?.data?.runtime ? (
                <div className="release-date name-item">
                  <div>
                    {dayjs(data?.data?.release_date).format("DD/MM/YYYY")}(
                    {country})
                  </div>
                </div>
              ) : (
                <Skeleton variant="rounded" width={109} height={38.5} />
              )}
              <div className="genres">
                <div className="genres-container">
                  <div className="names-flex">
                    {genreNames?.map((name) =>
                      genreNames ? (
                        <div key={name} className="name-item">
                          {name}
                        </div>
                      ) : (
                        <Skeleton
                          variant="rounded"
                          width={73.37}
                          height={38.5}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              {data?.data?.release_date ? (
                <div className="duration name-item">{toHoursAndMinutes()}</div>
              ) : (
                <Skeleton variant="rounded" width={73.37} height={38.5} />
              )}
            </div>
            <div className="features">
              {data?.data?.release_date ? (
                <div className="rating-box">
                  <div className="rating">
                    <CircularProgressbar
                      className="progressbar"
                      value={rating}
                      text={rating}
                      background
                      maxValue={10}
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#081c22",
                        textColor: "white",
                        pathColor:
                          rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                        trailColor: "transparent",
                      })}
                    />
                  </div>
                </div>
              ) : (
                <Skeleton variant="rounded" width={55} height={55} />
              )}
              {data?.data?.release_date ? (
                <div className="name">User Score</div>
              ) : (
                <Skeleton variant="rounded" width={50} height={50} />
              )}

              {data?.data?.release_date ? (
                <button className="right-div-props">
                  <AiOutlineUnorderedList className="list" />
                </button>
              ) : (
                <Skeleton variant="rounded1" width={50} height={50} />
              )}
              {data?.data?.release_date ? (
                <button className="right-div-props">
                  <AiFillHeart
                    color={heartColor}
                    onClick={handleClick}
                    className="list"
                  />
                </button>
              ) : (
                <Skeleton variant="rounded" width={50} height={50} />
              )}
              {data?.data?.release_date ? (
                <button className="right-div-props">
                  <BsFillBookmarkFill
                    color={BookmarkColor}
                    onClick={handleClickB}
                    className="list"
                  />
                </button>
              ) : (
                <Skeleton variant="rounded" width={50} height={50} />
              )}
              {data?.data?.release_date ? (
                <button className="right-div-props">
                  <AiFillStar className="list" />
                </button>
              ) : (
                <Skeleton variant="rounded" width={50} height={50} />
              )}
              {data?.data?.release_date ? (
                <div className="trailer">
                  <button onClick={() => setOpen(!open)} className="play">
                    <FaPlay className="play-icon" />
                  </button>
                  <div onClick={() => setOpen(!open)}>Play Trailer</div>

                  <Dialog
                    maxWidth={"lg"}
                    PaperProps={{
                      sx: {
                        width: "1200px",
                        height: "750px",
                      },
                    }}
                    open={open}
                    onClose={() => setOpen(!open)}
                  >
                    <div className="trailer-Box">
                      <Trailer dataId={dataId} />
                    </div>
                    <DialogActions>
                      <IconButton
                        aria-label="close"
                        onClick={() => setOpen(!open)}
                        sx={{
                          position: "absolute",
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500],
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </DialogActions>
                  </Dialog>
                </div>
              ) : (
                <Skeleton variant="rounded" width={150} height={50} />
              )}
            </div>
            {data?.data?.overview ? (
              <div className="overview">
                {<h2>Overview</h2>}
                {data?.data?.overview}
              </div>
            ) : (
              <Skeleton variant="rounded" width={800} height={57} />
            )}
            <div className="watch-now">
              <Link to={`/${page}/${mediaType}/${data?.data?.id}/mediaPlayer`}>
                {data?.data?.release_date ? (
                  <button
                    style={style}
                    onMouseOver={borderOut}
                    onMouseOut={() => setHover(true)}
                    onClick={() => setHover(true)}
                    className="watch-button"
                  >
                    <div className={!hover ? "hidden" : "effect"}></div>Watch
                    Now
                  </button>
                ) : (
                  <Skeleton variant="rounded" width={100} height={65} />
                )}
              </Link>

              {data?.data?.release_date ? (
                <Credit dataId={dataId} />
              ) : (
                <Skeleton variant="rounded" width={800} height={65} />
              )}
            </div>
          </div>
        </div>

        <Cast dataId={dataId} />
      </ContentWrapper>
    </div>
  );
};

export default BasicDetails;
