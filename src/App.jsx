import "./App.css";
import Home from "./pages/home/home";
import AllButtons from "./pages/AllButtons/AllButtons";
// import video from "./assets/arrow.mp4";
// import video from "./assets/air_bubbles.mp4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="video-container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbuttons" element={<AllButtons />} />
        <Route path="*" element={<h1>Error 404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
