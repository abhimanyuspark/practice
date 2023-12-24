import { Dashboard, List, Setting } from "../../style/Icons/Icons";

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
      {
        id: 2,
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
  {
    id: 4,
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
