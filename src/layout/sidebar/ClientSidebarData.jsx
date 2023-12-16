import { Dashboard, List, Setting, LoginIcon } from "../../style/Icons/Icons";

export const ClientSidebarData = [
  {
    id: 1,
    icon: Dashboard,
    value: "Client Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Dashboard",
        link: "/",
      },
      //   {
      //     id: 2,
      //     value: "Select",
      //     link: "/select",
      //   },
      {
        id: 3,
        value: "All Buttons",
        link: "/allbuttons",
      },
    ],
  },
  {
    id: 2,
    icon: List,
    value: "Upload",
    link: "/upload",
  },
  {
    id: 3,
    icon: List,
    value: "All Inputs",
    link: "/allinput",
  },
  // {
  //   id: 3,
  //   icon: LoginIcon,
  //   value: "Login",
  //   link: "/login",
  // },
  {
    id: 3,
    icon: Setting,
    value: "App setting",
    subMenu: [
      {
        id: 1,
        value: "Settings",
        link: "/setting",
      },
    ],
  },
];
