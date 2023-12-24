import { Dashboard, List, Setting } from "../../style/Icons/Icons";

export const EmployeeSidebarData = [
  {
    id: 1,
    icon: Dashboard,
    value: "Employee Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Dashboard",
        link: "/",
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
