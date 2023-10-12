import * as url from "url";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import "./style.scss";
import Profile from "../../Profile/Profile";
import CloseIcon from '@mui/icons-material/Close';
const Cast = ({ dataId }) => {
  const { data: credit, loading, error } = useFetch(`/movie/${dataId}/credits`);
  const { url } = useSelector((state) => state.home);

  const crewmember = credit?.cast;
  


  const [open, setOpen] = useState({});

  const handleDialogOpen = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleDialogClose = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  return (
    <div className="cast-container">
      <h1>Top Billed Cast</h1>
      <div className="cast-flex">
        {crewmember?.map((item, index) => {
          const posterUrl = url.poster + item.profile_path;

          return (
            <div className="profile-block" key={index}>
              <div onClick={() => handleDialogOpen(index)} className="poster">
                <Avatar
                  src={posterUrl}
                  sx={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="names">
              <div onClick={() => handleDialogOpen(index)} className="name">
                {item.name}
              </div>
              <div className="post">{item.character}</div>
              </div>

              <Dialog
                maxWidth={"lg"}
                PaperProps={{
                  sx: {
                    width: "800px",
                    height: "750px",
                  },
                }}
                open={open[index]}
                onClose={() => handleDialogClose(index)}
              >
                <div className="dialogBox">
                  <Profile dataId={item.id} />
                </div>

                <DialogActions>
                  

                  <IconButton
                    aria-label="close"
                    onClick={() => handleDialogClose(index)}
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
          );
        })}
      </div>
    </div>
  );
};

export default Cast;
