import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
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

const StyledApp = styled.div``;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <Router>
            <div className="brandContainer">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Logos/ausec.png`}
                alt="AUSEC"
                className={`ausecBrand`}
              />
            </div>
            <Navbar />
            <AllRoutes />
            <Footer />
          </Router>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/6dt" element={<SixDTTalks />} />

      <Route path="/workshops" element={<Workshops />} />
      <Route path="/workshops/:title" element={<WorkshopsMiddleware />} />

      <Route path="/mini-events" element={<MiniEvents />} />
      <Route path="/mini-events/:title" element={<MiniEventsMiddleware />} />

      <Route path="/mega-events" element={<MegaEvents />} />
      <Route path="/mega-events/:title" element={<MegaEventsMiddleware />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
