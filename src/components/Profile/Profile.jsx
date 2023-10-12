import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { Avatar, IconButton } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
const Profile = ({ dataId }) => {
  const { url } = useSelector((state) => state.home);
  const { mediaType } = useParams();
  const { data, loading } = useFetch(`/person/${dataId}`);
  const { data: credits, loading: creditsload } = useFetch(
    `/person/${dataId}/${mediaType}_credits`
  );
  const { id } = useParams();

  const posterUrl = url.poster + data?.profile_path;
  const { data: external, loading: externalload } = useFetch(
    `/person/${dataId}/external_ids`
  );
  const { data: images, loading: imagesload } = useFetch(
    `/person/${dataId}/images`
  );
  console.log(images);

  const gender = () => {
    if (data?.gender === 2) {
      return "Male";
    } else if (data?.gender === 1) {
      return "Female";
    } else {
      return "Other";
    }
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const ref = useRef(null);
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
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  return (
    <div className="profile-container">
      <div className="left-box">
        <div className="avatar">
          <div className="photo-box">
            <Carousel
              style={{ width: "300px", height: "400px" }}
              activeIndex={index}
              onSelect={handleSelect}
            >
              {!loading?(images?.profiles && images?.profiles?.length &&
                images?.profiles?.map((item) => {
                  const posterUrl = url.poster + item.file_path;
                  return (
                    <Carousel.Item>
                      <img
                        style={{
                          objectFit: "cover",
                          width: "300px",
                          height: "400px",
                          borderRadius: "10px",
                        }}
                        src={posterUrl}
                        alt=""
                      />
                      <div>{posterUrl}</div>
                    </Carousel.Item>
                  );
                })):<Skeleton variant="rounded" width={300} height={400} />}
            </Carousel>
          </div>
          <div className="socialHandle">
            {!loading ? (
              external &&
              Object.entries(external).map(([key, value]) => {
                if (
                  (key === "facebook_id" ||
                    key === "instagram_id" ||
                    key === "twitter_id") &&
                  value
                ) {
                  if (key === "facebook_id") {
                    return (
                      <Link to={`https://www.facebook.com/${value}`}>
                        <FaFacebook key={key} />
                      </Link>
                    );
                  }
                  if (key === "instagram_id") {
                    return (
                      <Link to={`https://www.instagram.com/${value}`}>
                        <FaInstagram key={key} />
                      </Link>
                    );
                  }
                  if (key === "twitter_id") {
                    return (
                      <Link to={`https://twitter.com/${value}`}>
                        <FaTwitter key={key} />
                      </Link>
                    );
                  }
                }
                return null;
              })
            ) : (
              <Skeleton variant="rounded" width={260} height={34.5} />
            )}
          </div>
          <div className="personal-info">
            {!loading ? (
              <div className="knownfor">
                {data &&
                  data.known_for_department &&
                  data.known_for_department.length > 0 && <h4>Known for</h4>}
                {data?.known_for_department}
              </div>
            ) : (
              <Skeleton variant="rounded" width={145} height={43} />
            )}
            {!loading ? (
              <div className="popularity">
                {data && data.popularity && data.popularity > 0 && (
                  <h4>Popularity</h4>
                )}

                {data?.popularity}
              </div>
            ) : (
              <Skeleton variant="rounded" width={145} height={43} />
            )}
            {!loading ? (
              <div className="gender">
                {data && data.gender && <h4>Gender</h4>}
                {gender()}
              </div>
            ) : (
              <Skeleton variant="rounded" width={145} height={43} />
            )}
            {!loading ? (
              <div className="DateofBirth">
                {data && data.birthday && data.birthday.length > 0 && (
                  <h4>Date of Birth</h4>
                )}
                {data?.birthday}
              </div>
            ) : (
              <Skeleton variant="rounded" width={145} height={43} />
            )}
            {!loading ? (
              <div className="PlaceofBirth">
                {data &&
                  data.also_known_as &&
                  data.also_known_as.length > 0 && <h4>Place of Birth</h4>}
                {data?.place_of_birth}
              </div>
            ) : (
              <Skeleton variant="rounded" width={145} height={43} />
            )}

            {!loading ? (
              <div className="othername">
                {data &&
                  data.also_known_as &&
                  data.also_known_as.length > 0 && <h4>Also Known As</h4>}
                {data &&
                  data?.also_known_as?.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
              </div>
            ) : (
              <Skeleton variant="rounded" width={145} height={43} />
            )}
          </div>
        </div>
      </div>
      <div className="right-box">
        {!loading ? (
          <div className="name">{data?.name}</div>
        ) : (
          <Skeleton variant="rounded" width={430} height={46} />
        )}

        {!loading ? (
          <h2>Biography</h2>
        ) : (
          <Skeleton variant="rounded" width={430} height={34} />
        )}
        <div ref={ref} style={open ? null : paraStyle} className="overview">
          {data?.biography}
        </div>
        {showButton && (
          <div className="button-box">
            <button style={{backgroundColor:"#e2d2ff",padding:"10px",borderRadius:"10px",color:"black",fontWeight:"bold",border:"none"}} onClick={() => setOpen(!open)}>
              {open ? "Read Less" : "Read More"}
            </button>
          </div>
        )}

        <div className="known-for">
          {!loading ? (
            <h2>Known For</h2>
          ) : (
            <Skeleton variant="rounded" width={430} height={46} />
          )}
          <div className="known-box">
            <div className="left-box-known">
              {credits?.cast?.map((item) => {
                const piscure = url.poster + item?.poster_path;
                return (
                  <div className="poster-container">
                    {!loading ? (
                      <div className="poster">
                        {!creditsload ? (
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
                      <Skeleton variant="rounded" width={160} height={250} />
                    )}
                    {!creditsload ? (
                      <div className="poster-name">{String(item?.title)}</div>
                    ) : (
                      <Skeleton variant="rounded" width={160} />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="right-box-known"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
