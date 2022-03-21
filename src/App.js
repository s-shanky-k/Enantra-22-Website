import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import SixDTTalks from "./pages/SixDTTalks/SixDTTalks";
import Workshops from "./pages/Workshops/Workshops";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WorkshopsMiddleware from "./pages/Workshops/WorkshopsMiddleware";
import Footer from "./components/Footer/Footer";
import MiniEvents from "./pages/MiniEvents/MiniEvents";
import MiniEventsMiddleware from "./pages/MiniEvents/MiniEventsMiddleware";
import MegaEvents from "./pages/MegaEvents/MegaEvents";
import MegaEventsMiddleware from "./pages/MegaEvents/MegaEventsMiddleware";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import SimpleLoader from "./components/SimpleLoader/SimpleLoader";

export const ThemeTogglerFunc = createContext();
export const Theme = createContext();
export const Loader = createContext();
export const SetLoader = createContext();

const StyledApp = styled.div``;

function App() {
  const [theme, settheme] = useState();
  const [loader, setloader] = useState(false);

  useEffect(() => {
    if (Cookies.get("theme") === undefined) {
      Cookies.set("theme", "light");
    }
    settheme(Cookies.get("theme"));

    return () => {};
  }, []);

  const toggleTheme = () => {
    let temp = theme === "light" ? "dark" : "light";
    Cookies.set("theme", temp);
    settheme(temp);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <ThemeTogglerFunc.Provider value={toggleTheme}>
          <Theme.Provider value={theme}>
            <div className="App">
              <Router>
                <Navbar />
                <AllRoutes theme={theme} />
                <div className={"themeToggler"}>
                  <ThemeToggler />
                </div>
                <Footer />
              </Router>
            </div>
          </Theme.Provider>
        </ThemeTogglerFunc.Provider>
      </StyledApp>
    </ThemeProvider>
  );
}

const AllRoutes = ({ theme }) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="brandContainer" onClick={() => navigate("/")}>
        {theme === "dark" && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Logos/enantra_white.png`}
            alt="ENANTRA LOGO"
            className={`enantraBrand`}
          />
        )}
        {theme === "light" && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Logos/enantra_color.png`}
            alt="ENANTRA LOGO"
            className={`enantraBrand`}
          />
        )}
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/6dt" element={<SixDTTalks />} />

        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshops/:title" element={<WorkshopsMiddleware />} />

        <Route path="/mini-events" element={<MiniEvents />} />
        <Route path="/mini-events/:title" element={<MiniEventsMiddleware />} />

        <Route path="/mega-events" element={<MegaEvents />} />
        <Route path="/mega-events/:title" element={<MegaEventsMiddleware />} />

        <Route path="/loader" element={<SimpleLoader />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
