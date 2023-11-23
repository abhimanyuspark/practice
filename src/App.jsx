import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/home/home";
import AllButtons from "./pages/AllButtons/AllButtons";
import Accordians from "./components/accordians/accordians";
import CustomSelect from "./pages/CustomSelect/CustomSelect";
import Login from "./pages/Login/Login";
import Form from "./components/DropDown/Form";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/allbuttons" element={<AllButtons />} />
        <Route path="/accordians" element={<Accordians />} />
        <Route path="/select" element={<CustomSelect />} />
        <Route path="/DropDown" element={<Form />} />
        <Route path="/setting" element={<h1>Setting</h1>} />

        <Route path="*" element={<h1>Error 404 not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
