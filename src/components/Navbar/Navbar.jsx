import React, { useState } from "react";
import { CgMenuBoxed } from "react-icons/cg";
import {
  AiOutlineCloseCircle,
  AiOutlineSearch,
  AiOutlineFilter,
  AiOutlinePlusSquare,
  AiOutlineDown,
} from "react-icons/ai";

import SignIn from "../SignIn/SignIn";
import Login from '../Login/Login'
import { HiOutlineSignal } from "react-icons/hi2";
import { BiLogOut, BiCategory } from "react-icons/bi";
import { BsFillCaretRightFill } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import Lottie from "lottie-react";
import Profile from "../../assets/images/system-outline-8-account.json";
import Bell from "../../assets/images/system-solid-46-notification-bell.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import Recent from "../Navbar/Recent-downloads/Recent";
import { useMenuOpen } from "../../customHook/useMenuOpen.js";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  Drawer,
  IconButton,
  Tooltip,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Backdrop, Badge, Box, Button, CircularProgress } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PageNot from "../../assets/images/404/animation_llp1qyau.json";
import Genres from "../Navbar/Genres/Genres";
import Bookmarked from "../Navbar/Bookmarked/Bookmarked";
import { Library, Streaming, menu, miscellaneous } from "./NavbarData";

import "./style.scss";
import ColorTabs from "./Tabs/Tabs";
import useFetching from "../../hooks/useFetching";
import { getAuth, signOut } from "firebase/auth";
import Footer from "../Footer/Footer";


const Navbar = (data) => {
  
  const [isOpen, , setIsOpen, toggle] = useMenuOpen();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openbackdrop, setOpenbackdrop] = useState(false);
  const [openbackdrop2, setOpenbackdrop2] = useState(false);
  const [openbackdrop3, setOpenbackdrop3] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const open = Boolean(anchorEl);
  const { mediaType, page } = useParams();
  const navigate = useNavigate();
  // const { data } = useFetching("/movie/new/1", {}); // Pass the URL and params as needed

  // console.log(data);

  const handleOpenBackdrop = () => {
    setOpenbackdrop(true);
  };
  const handleCloseBackdrop = () => {
    setOpenbackdrop(!openbackdrop);
  };
  const handleOpenBackdrop2 = () => {
    setOpenbackdrop2(true);
  };
  const handleCloseBackdrop2 = () => {
    setOpenbackdrop2(!openbackdrop2);
  };
  const handleOpenBackdrop3 = () => {
    setOpenbackdrop3(true);
  };
  const handleCloseBackdrop3 = () => {
    setOpenbackdrop3(!openbackdrop3);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    
  };
  const handleCloseout = () => {
    setAnchorEl(null);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/home/tv')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(13, 13, 15)",
      },
      secondary: blue,
    },
  });
  // if ((data?.data?.name)=== ''){
  //   setIsButtonDisabled(true)
  // }else{
  //   setIsButtonDisabled(false)
  // }
const isButtonDisabled= data?.data?.name === '';
console.log(data?.data?.name)
console.log(isButtonDisabled)

  return (
    <>
      <div className="menu">
        <Tooltip title="menu-bar">
          <button className="right-div-props">
            <CgMenuBoxed
              className={isOpen ? "hidden menu-bar" : "menu-icon  "}
              onClick={toggle}
              style={{ color: "white" }}
            />
          </button>
        </Tooltip>

        <div
          className="genres-box"
          style={{
            marginLeft: isOpen ? "300px" : "50px",
            transition: "all 0.4s",
          }}
        >
          <ColorTabs />
        </div>
        <div
          className="right-icons-box"
          style={{
            marginRight: isDrawerOpen ? "350px" : "0px",
            transition: "all 0.5s",
          }}
        >
          <ThemeProvider theme={theme}>
            <Tooltip title="live">
              <button className="right-div-props">
                <HiOutlineSignal
                  style={{ color: "white" }}
                  className="menu-icon right-icons"
                />
              </button>
            </Tooltip>
            <Tooltip title="notifications">
              <button onClick={handleOpenBackdrop} className="right-div-props">
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "red",
                    },
                  }}
                  overlap="circular"
                  badgeContent=" 1"
                  variant="dot"
                >
                  <Lottie
                    animationData={Bell}
                    loop={false}
                    style={{ width: 40 }}
                    className="Bell"
                    autoPlay={false}
                  />
                </Badge>
              </button>

              <Dialog
                maxWidth={"lg"}
                PaperProps={{
                  sx: {
                    width: "1200px",
                    height: "750px",
                  },
                }}
                open={openbackdrop}
                onClose={handleCloseBackdrop}
              >
                <div className="latest-movies"></div>
                <div className="latest-shows"></div>
                <DialogActions>
                  <IconButton
                    aria-label="close"
                    onClick={handleCloseBackdrop}
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
            </Tooltip>

            <Tooltip title="menu-bar">
              <button className="menu-lib">
                <BiCategory
                
                  style={{ color: "white" }}
                  onClick={() => setIsDrawerOpen(true)}
                  className="menu-icon right-icons"/>
                
                
                
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
              <IconButton
                aria-label="close"
                onClick={toggle}
                className="menu-icon"
                sx={{
                  position: "absolute",

                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>

            <h3>Menu</h3>
            {menu.map((route, index) => (
              <div key={index} className="route">
                <div
                  className={`icon icon-link ${
                    route.path === `/${page}/${mediaType}` ? "red-icon" : ""
                  }`}
                >
                  {route.icon}
                </div>
                <div className="names">
                  <Link className="icon-link" to={route.path}>
                    {route.name}
                  </Link>
                </div>

                <div
                  className={
                    route.path === `/${page}/${mediaType}` ? "red-box" : ""
                  }
                ></div>
              </div>
            ))}

            <h3>Library</h3>
            {Library.map((route, index) => (
              <div key={index} className="route">
                <div className="icon">{route.icon}</div>
                <Link className="icon-link" to={route.path}>
                  {route.name}
                </Link>
              </div>
            ))}
            {miscellaneous.map((route, index) => (
              <div key={index} className="route">
                <div className="icon">{route.icon}</div>
                <Link className="icon-link" to={route.path}>
                  {route.name}
                </Link>
              </div>
            ))}

            <div className="logout-box">
            <button onClick={handleOpenBackdrop2} className="logout-box">
              <BiLogOut />
              <div className="logout">SignIn</div>
            </button>
            <button onClick={handleOpenBackdrop3} className="logout-box">
              <BiLogOut />
              <div className="logout">Login</div>
            </button>
            </div>

            <Dialog
              maxWidth={"lg"}
              PaperProps={{
                sx: {
                  width: "1200px",
                  height: "750px",
                },
              }}
              open={openbackdrop2}
              onClose={handleCloseBackdrop2}
            >
              <SignIn />
              <DialogActions>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseBackdrop2}
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
            <Dialog
              maxWidth={"lg"}
              PaperProps={{
                sx: {
                  width: "1200px",
                  height: "750px",
                },
              }}
              open={openbackdrop3}
              onClose={handleCloseBackdrop3}
            >
              <Login/>
              <DialogActions>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseBackdrop3}
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
        </div>
      </Drawer>

      <Drawer
        className="drawer"
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#333333",
            whiteSpace: "nowrap",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        <div className="box">
          <div className="profile-section">
            <div className="avatar">
              <Lottie
                animationData={Profile}
                loop={false}
                style={{ width: 40, color: "white" }}
                className="profile"
                autoPlay={false}
              />
              <div className="edit-icon"></div>
              <div className="name-details">
                <div className="name">Junior 07</div>
                <div className="email">junior07@gmail.com</div>
              </div>
            </div>
            <div className="profile-drop-down-menu">
              <AiOutlineDown
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="basic-button"
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
                {!isButtonDisabled?(<MenuItem onClick={handleCloseout}>Logout</MenuItem>):(<div></div>)}
              </Menu>
            </div>
          </div>

          <div className="search-bar">
            <div className="search-icon-box">
              <AiOutlineSearch className="search-icon" />
            </div>
            <input type="text" placeholder="Search movies"/>
            <div className="filter-icon-box">
              <AiOutlineFilter className="filter-icon" />
            </div>
          </div>

          <div className="genres">
            <div className="genres-bar">
              <h3>GENRE</h3>
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
