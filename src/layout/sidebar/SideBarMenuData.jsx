import { Dashboard, List, Setting, Login } from "../../style/Icons/Icons";

export const SideBarMenuData = [
  {
    id: 1,
    icon: Dashboard,
    value: "Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Home",
        link: "/",
      },
      {
        id: 2,
        value: "Select",
        link: "/select",
      },
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
    value: "Accordians",
    link: "/accordians",
  },
  // {
  //   id: 3,
  //   icon: Login,
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
