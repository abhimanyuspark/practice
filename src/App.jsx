import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AllButtons from "./pages/AllButtons/AllButtons";
import Accordians from "./components/accordians/accordians";
import CustomSelect from "./pages/CustomSelect/CustomSelect";
import Login from "./pages/Login/Login";
import Form from "./components/DropDown/Form";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/Theme/Theme";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.layout);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Routes>
        {/* <Route path="/"> */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/allbuttons" element={<AllButtons />} />
          <Route path="/accordians" element={<Accordians />} />
          <Route path="/select" element={<CustomSelect />} />
          <Route path="/DropDown" element={<Form />} />
          <Route path="/setting" element={<h1>Setting</h1>} />
        </Route>

        <Route path="*" element={<h1>Error 404 not found</h1>} />
        {/* </Route> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
