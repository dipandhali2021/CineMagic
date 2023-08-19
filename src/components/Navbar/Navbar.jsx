import React, { useState } from "react";
import { CgMenuBoxed } from "react-icons/cg";
import {
  AiOutlineCloseCircle,
  AiOutlineSearch,
  AiOutlineFilter,
  AiOutlinePlusSquare,
  AiFillCaretDown,
} from "react-icons/ai";
import DialogBox from "../DialogBox/DialogBox"
import { HiOutlineSignal } from "react-icons/hi2";
import { BiLogOut, BiCategory } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { BsFillCaretRightFill } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { Library, Streaming, menu, miscellaneous } from "./NavbarData";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Backdrop, Badge, Box, Button, CircularProgress } from "@mui/material";

import "./style.scss";
import { Link } from "react-router-dom";
import Recent from "../Navbar/Recent-downloads/Recent";
import { useMenuOpen } from "../../customHook/useMenuOpen.js";
import { Avatar, Divider, Drawer, IconButton, Tooltip } from "@mui/material";

import Genres from "../Navbar/Genres/Genres";
import Bookmarked from "../Navbar/Bookmarked/Bookmarked";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { blue, red } from "@mui/material/colors";

const Navbar = () => {
  const [isOpen, , setIsOpen, toggle] = useMenuOpen();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openbackdrop, setOpenbackdrop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenBackdrop = () => {
    setOpenbackdrop(true);
  };
  const handleCloseBackdrop = () => {
    setOpenbackdrop(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(13, 13, 15)",
      },
      secondary: blue,
    },
  });

  return (
    <>
      <div className="menu">
        <Tooltip title="menu-bar">
          <button className="right-div-props">
            <CgMenuBoxed
              className={isOpen ? "hidden menu-bar" : "menu-icon  "}
              onClick={toggle}
            />
          </button>
        </Tooltip>

        <div
          className="genres-box"
          style={{ marginLeft: isOpen ? "300px" : "50px" }}
        >
          <ul className="genres">
            <li className="genre1">Movies</li>
            <li className="genre2">Series</li>
            <li className="genre3">TV Shows</li>
          </ul>
        </div>
        <div
          className="right-icons-box"
          style={{ marginRight: isDrawerOpen ? "350px" : "0px" }}
        >
          <ThemeProvider theme={theme}>
            <Tooltip title="live">
              <button className="right-div-props">
                <HiOutlineSignal className="menu-icon right-icons" />
              </button>
            </Tooltip>
            <Tooltip title="notifications">
              <button onClick={handleOpenBackdrop} className="right-div-props">
            <Badge color="secondary" overlap="circular" badgeContent=" 1" variant="dot">
                <MdNotificationsNone className="menu-icon right-icons " />
              </Badge>
              </button>

              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: 11,
                }}
                open={openbackdrop}
                onClick={handleCloseBackdrop}
              >
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: "primary.dark",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                />
              </Backdrop>
            </Tooltip>

<DialogBox/>
            <Tooltip title="menu-bar">
              <button className="right-div-props">
                <BiCategory
                  onClick={() => setIsDrawerOpen(true)}
                  className="menu-icon right-icons"
                />
              </button>
            </Tooltip>
          </ThemeProvider>
        </div>
      </div>

      <Drawer
        className="drawer"
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "blue",
            width: "300px",
          },
        }}
      >
        <div className="menu-bar">
          <div className="left-bar">
            {Streaming.map((route, index) => (
              <div key={index} className="route">
                <Link to={route.path}>
                  <div className="icon">{route.icon}</div>
                </Link>
              </div>
            ))}
            <div className="close-icon">
              <AiOutlinePlusSquare className="menu-icon" onClick={toggle} />
            </div>
          </div>

          <div className="right-bar">
            <div className="close-icon">
              <AiOutlineCloseCircle className="menu-icon" onClick={toggle} />
            </div>
            <h3>Menu</h3>
            {menu.map((route, index) => (
              <div key={index} className="route">
                <div className="icon">{route.icon}</div>
                <a href={route.path}>{route.name}</a>
              </div>
            ))}

            <h3>Library</h3>
            {Library.map((route, index) => (
              <div key={index} className="route">
                <div className="icon">{route.icon}</div>
                <a href={route.path}>{route.name}</a>
              </div>
            ))}
            {miscellaneous.map((route, index) => (
              <div key={index} className="route">
                <div className="icon">{route.icon}</div>
                <a href={route.path}>{route.name}</a>
              </div>
            ))}

            <button className="logout-box">
              <BiLogOut />
              <div className="logout">Logout</div>
            </button>
          </div>
        </div>
      </Drawer>

      <Drawer
        className="drawer"
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "red",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        <div className="box">
          <div className="profile-section">
            <div className="avatar">
              <Avatar src="../src/assets/images/avatar.png" />
            </div>
            <div className="name-details">
              <div className="name">Dipan Dhali</div>
              <div className="email">dipandhali2021@gmail.com</div>
            </div>
            <div className="profile-drop-down-menu">
              <AiFillCaretDown
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  width: "20px",
                  marginRight: "90px",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>

            <div className="close-icon">
              <AiOutlineCloseCircle
                className="menu-icon"
                onClick={() => setIsDrawerOpen(false)}
              />
            </div>
          </div>

          <div className="search-bar">
            <div className="search-icon-box">
              <AiOutlineSearch className="search-icon" />
            </div>
            <input type="text" />
            <div className="filter-icon-box">
              <AiOutlineFilter className="filter-icon" />
            </div>
          </div>

          <div className="genres">
            <div className="genres-bar">
              <h3>Genres.</h3>
              <a href="#" target="_blank" className="see-all">
                <h3>see all</h3>
                <BsFillCaretRightFill />
              </a>
            </div>
            <Genres />
          </div>

          <div className="recent-download">
            <Recent />
          </div>
          <div className="book-marked">
            <Bookmarked />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
