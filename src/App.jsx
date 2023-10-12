import react, { useEffect, useState } from "react";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import Details from "./pages/Details/Details";
import Discovery from "./pages/Discovery/Discovery";
import Searchresult from "./pages/SearchResult/Searchresult";
import PageNotFound from "./pages/404/PageNotFound";
import MediaPlayer from "./pages/MediaPlayer/MediaPlayer";
import { auth } from "./components/Firebase/firebase";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setEmail(user.email);
        
      } else {setUserName("");
    setEmail("");
    }
    });
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };
  

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:page/:mediaType" element={<Home name={userName} email={email}/>} />
        <Route path="/:page/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<Searchresult />} />
        <Route path="/discovery/:mediaType" element={<Discovery />} />
        <Route
          path="/:page/:mediaType/:id/mediaPlayer"
          element={<MediaPlayer />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
