import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const {page} =useParams();
  const movie = () => {
    navigate(`/${page}/movie`);
  };
  const anime = () => {
    navigate(`*`);
  };
  const tvshows = () => {
    navigate(`/${page}/tv`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="#D97D54"
        sx={{
          ".Mui-selected": {
          color: `yellowgreen`,
          fontFamily:"Open Sans,sans-serif",
          fontWeight:"600"
          },
          }}
        
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          },
        }}
        aria-label="secondary tabs example"
      >
        <Tab
          value="one"
          onClick={movie}
          
          label="Movies"
        />
          <Tab
            value="three"
            onClick={tvshows}
            
            label="TV Shows"
          />
        <Tab
          value="two"
          onClick={anime}
          
          label="Anime"
        />
      </Tabs>
    </Box>
  );
}
