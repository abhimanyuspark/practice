import "./App.css";
import Home from "./pages/home/home";
// import video from "./assets/arrow.mp4";
// import video from "./assets/air_bubbles.mp4";

function App() {
  return (
    <>
      {/* <div className="video-container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
      <Home />
    </>
  );
}

export default App;
