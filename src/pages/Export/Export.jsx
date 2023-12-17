import { lazy } from "react";

const Home = lazy(() => import("../home/home"));
const Form = lazy(() => import("../../components/DropDown/Form"));
const AllButtons = lazy(() => import("../AllButtons/AllButtons"));
const Accordians = lazy(() => import("../accordians/accordians"));
const CustomSelect = lazy(() => import("../CustomSelect/CustomSelect"));
const Login = lazy(() => import("../Login/Login"));
const Forget = lazy(() => import("../Login/Forget"));
const Unauthorized = lazy(() => import("../Unauthorized/Unauthorized"));
const PageNotFound = lazy(() => import("../404/PageNotFound"));
const AllInput = lazy(() => import("../Input/AllInput"));
const UseList = lazy(() => import("../UserList/UseList"));
const UserDetails = lazy(() => import("../UserList/CRUD_For_User/UserDetails"));
const UsersAdd = lazy(() => import("../UserList/CRUD_For_User/UsersAdd"));
const UsersEdit = lazy(() => import("../UserList/CRUD_For_User/UsersEdit"));
const Upload = lazy(() =>
  import("../../components/Upload/FileUploadComponent")
);

export {
  Home,
  Form,
  AllButtons,
  Accordians,
  CustomSelect,
  Login,
  Forget,
  Unauthorized,
  PageNotFound,
  AllInput,
  UseList,
  UserDetails,
  UsersAdd,
  UsersEdit,
  Upload,
};
