import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { AiFillCaretRight } from 'react-icons/ai';
import { Skeleton } from '@mui/material';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import { getUpdatedList } from '../../store/updateSlice';
import './style.scss';

const MovieThumb = ({ data, loading }) => {
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

  const posterUrl = url.poster + data.backdrop_path;

  return (
    <div className="bigger">
      <div className="carousel-backdrop">
        <ContentWrapper>
          {!loading ? (
            <div className="carouselItems">
              <div className="carouselItem-backdrop">
                {!loading ? (
                  <div className="posterBlock-backdrop">
                    <img src={posterUrl} alt="Movie Poster" />
                  </div>
                ) : (
                  <Skeleton variant="rounded" width={400} height={225} />
                )}

                <div className="details-backdrop">
                  {!loading ? (
                    <div className="movie-name">
                      <h3>{data.title || data.name}</h3>
                    </div>
                  ) : (
                    <Skeleton variant="rounded" width={350} height={22.5} />
                  )}

                  <div className="release-date">
                    {!loading ? (
                      dayjs(data.release_date || data.first_air_date).format("YYYY")
                    ) : (
                      <Skeleton variant="rounded" width={350} height={18.5} />
                    )}
                  </div>

                  <Link to={`/home/${mediaType}/${data.id}`}>
                    <div className="play-icon">
                      <AiFillCaretRight/>
                    </div>
                  </Link>

                  <div className='video-bar'>
                    <span className='video-timer'>00:00</span>
                    <div className='bar'>
                      <div className='dot'/>
                    </div>
                    <span className='video-timer'>1:59:00</span>
                  </div>

                  {!loading ? (
                    <div className="flex-details">
                    </div>
                  ) : (
                    <Skeleton variant="rounded" width={350} height={35.5} />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Skeleton variant="rounded" width={1240} height={270} />
          )}
        </ContentWrapper>
      </div>
    </div>
  );
};

export default MovieThumb;