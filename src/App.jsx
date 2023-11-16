import "./App.css";
// import video from "./assets/arrow.mp4";
// import video from "./assets/air_bubbles.mp4";
import AllPages from "./pages/AllPages/AllPages";

function App() {
  return (
    <>
      {/* <div className="video-container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
      <AllPages />
    </>
  );
}

export default App;
