import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import "./style.scss";
import ContentWrapper from "../components/content-wrapper/ContentWrapper";
import { Skeleton, withTheme } from "@mui/material";
import dayjs from "dayjs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlinePlus } from "react-icons/ai";
import Credit from "../components/credits/Crew/Credit";
import Cast from "../components/credits/Cast/Cast";
const BasicDetails = (data, loading, error) => {
  const [background, setBackground] = useState();
  const rating = data?.data?.vote_average;
  const { id } = useParams();


  const source= `https://www.youtube.com/embed/${data?.data?.id}`
  const { url } = useSelector((state) => state.home);
  const genre = data?.data?.genres;
  const dataId = data?.data?.id;

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
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={10000}
              height={600}
            />
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
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={300}
                  height={400}
                />
              </div>
            )}
          </div>

          <div className="poster-details">
            <div className="movie-name ">
              {data?.data?.original_title ? (
                <div>
                  {data?.data?.original_title}(
                  {dayjs(data?.data?.release_date).format("YYYY")})
                </div>
              ) : (
                <div>loading</div>
              )}
            </div>
            <div className="flex-box-poster">
              <div className="release-date name-item">
                {data?.data?.release_date ? (
                  <div>
                    {dayjs(data?.data?.release_date).format("DD/MM/YYYY")}()
                  </div>
                ) : (
                  <div>loading</div>
                )}
              </div>
              <div className="genres">
                <div className="genres-container">
                  <div className="names-flex">
                    {genreNames?.map((name) => (
                      <div key={name} className="name-item">
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="duration name-item">{toHoursAndMinutes()}</div>
            </div>
            <div className="rating">
              <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                  pathColor:
                    rating < 5 ? "red" : rating < 7 ? "orange" : "green",

                    textColor:"black",
                    textSize:"30"
                  
                })}
              />
            </div>
            <div className="overview">
              <h1>Overview</h1>
              {data?.data?.overview}
            </div>
            <div className="watch-now">
          <Link to={`/movie/${data?.data?.id}/mediaPlayer`}>
            <button className="watch-button">Watch Now</button>
          </Link>

          <Credit dataId = {dataId}/>
          
        </div>

          </div>
          
        </div>

        <Cast dataId = {dataId}/>
     

      
     
      </ContentWrapper>
    </div>
  );
};

export default BasicDetails;
