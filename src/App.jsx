import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import video from "./assets/arrow.mp4";
// import video from "./assets/air_bubbles.mp4";
import { Provider } from "react-redux";
import GlobalStore from "./Redux/Redux-Store/ReduxStore";
import AllPages from "./pages/AllPages/AllPages";

function App() {
  return (
    <BrowserRouter>
      <Provider store={GlobalStore}>
        {/* <div className="video-container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
        <AllPages />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
