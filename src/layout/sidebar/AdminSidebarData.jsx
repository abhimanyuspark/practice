import { Dashboard, List, Setting, Users } from "../../style/Icons/Icons";

export const AdminSidebarData = [
  {
    id: 1,
    icon: Dashboard,
    value: "Admin Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Dashboard",
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
  {
    id: 3,
    icon: Users,
    value: "Users",
    link: "/users",
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
