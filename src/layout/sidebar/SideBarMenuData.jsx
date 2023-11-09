export const SideBarMenuData = [
  {
    id: 1,
    icon: <span className="material-symbols-outlined">dashboard</span>,
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
    icon: <span className="material-symbols-outlined">lists</span>,
    value: "Accordians",
    link: "/accordians",
  },
  {
    id: 3,
    icon: <span className="material-symbols-outlined">settings</span>,
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
