import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AllButtons from "./pages/AllButtons/AllButtons";
import Accordians from "./components/accordians/accordians";
// import video from "./assets/arrow.mp4";
// import video from "./assets/air_bubbles.mp4";
import Navbar from "./layout/navbar/Navbar";
import SideBar from "./layout/sidebar/Sidebar";
import { AppWrapper, DashboardWrapper } from "./style/Export/Export";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="video-container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
      <AppWrapper>
        <Navbar />
        <SideBar />
        <DashboardWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allbuttons" element={<AllButtons />} />
            <Route path="/accordians" element={<Accordians />} />
            <Route path="*" element={<h1>Error 404 not found</h1>} />
          </Routes>
        </DashboardWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
