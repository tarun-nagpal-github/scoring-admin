import { themeConfig } from "./index";

const changeThemes = {
  id: "changeThemes",
  label: "themeChanger",
  defaultTheme: themeConfig.theme,
  options: [
    {
      themeName: "themedefault",
      buttonColor: "#ffffff",
      textColor: "#323332"
    }
  ]
};

const topbarTheme = {
  id: "topbarTheme",
  label: "themeChanger.topbar",
  defaultTheme: themeConfig.topbar,
  options: [
    {
      themeName: "dark",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "#222437",
      backgroundColor: "#222437",
      textColor: "rgba(255, 255, 255, .75)",
      badgeBackColor: "#FF0017",
      badgeTextColor: "#fff",
      breadCumbActiveColor: "#2196f3",
      horSidebarActiveBackColor: "rgba(33, 150, 243, 0.2)",
      horSidebarActiveTextColor: "#2196f3"
    },
    {
      themeName: "light",
      buttonBackColor: "#B8C6DB",
      buttonColor: "linear-gradient(45deg,#F5F7FA,#B8C6DB)",
      backgroundColor: "linear-gradient(45deg,#F5F7FA,#B8C6DB)",
      textColor: "rgba(0, 0, 0, .65)",
      badgeBackColor: "#5C258D",
      badgeTextColor: "#fff",
      breadCumbActiveColor: "#5C258D",
      horSidebarActiveBackColor: "rgba(0,0,0,.05)",
      horSidebarActiveTextColor: "#000"
    },
    {
      themeName: "sky",
      buttonBackColor: "#FFF",
      buttonColor: "linear-gradient(45deg,#F5F7FA,#B8C6DB)",
      backgroundColor: "linear-gradient(45deg,#F5F7FA, rgb(10, 191, 188))",
      textColor: "rgba(0, 0, 0, .65)",
      badgeBackColor: "#5C258D",
      badgeTextColor: "#fff",
      breadCumbActiveColor: "#5C258D",
      horSidebarActiveBackColor: "#fff",
      horSidebarActiveTextColor: "rgba(0, 0, 0, .65)"
    },
    {
      themeName: "gredient1",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#5C258D,#4389A2)",
      backgroundColor: "linear-gradient(45deg,#5C258D,#4389A2)",
      textColor: "rgba(255, 255, 255, .85)",
      badgeBackColor: "#ff4081",
      badgeTextColor: "#fff",
      breadCumbActiveColor: "#ff4081",
      horSidebarActiveBackColor: "rgba(0,0,0,.15)",
      horSidebarActiveTextColor: "#fff",
      type: "gredient"
    },
    {
      themeName: "gredient2",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor:
        "linear-gradient(45deg,rgba(167,139,252,1),rgba(82,107,248,1))",
      backgroundColor:
        "linear-gradient(45deg,rgba(167,139,252,1),rgba(82,107,248,1))",
      textColor: "rgba(255, 255, 255, .85)",
      badgeBackColor: "#fee140",
      badgeTextColor: "rgba(0,0,0,0.5)",
      breadCumbActiveColor: "#fee140",
      horSidebarActiveBackColor: "rgba(0,0,0,.15)",
      horSidebarActiveTextColor: "#fff",
      type: "gredient"
    },
    {
      themeName: "gredient3",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor:
        "linear-gradient(45deg,rgba(255,230,112,1),rgba(255,100,100,0.6))",
      backgroundColor:
        "linear-gradient(45deg,rgba(255,230,112,1),rgba(255,100,100,0.6))",
      textColor: "rgba(0,0,0,0.8)",
      badgeBackColor: "#ff4081",
      badgeTextColor: "#fff",
      breadCumbActiveColor: "#ff4081",
      horSidebarActiveBackColor: "rgba(0,0,0,.15)",
      horSidebarActiveTextColor: "#fff",
      type: "gredient"
    },
    {
      themeName: "gredient4",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor:
        "linear-gradient(45deg,rgba(76,79,106,1),rgba(118,124,163,1))",
      backgroundColor:
        "linear-gradient(45deg,rgba(76,79,106,1),rgba(118,124,163,1))",
      textColor: "rgba(255, 255, 255, .85)",
      badgeBackColor: "#a6c1ee",
      badgeTextColor: "#fff",
      breadCumbActiveColor: "#a6c1ee",
      horSidebarActiveBackColor: "rgba(0,0,0,.15)",
      horSidebarActiveTextColor: "#fff",
      type: "gredient"
    },
    {
      themeName: "gredient5",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg, #ff5252, #f48fb1)",
      backgroundColor: "linear-gradient(45deg, #ff5252, #f48fb1)",
      textColor: "rgba(255, 255, 255, .85)",
      badgeBackColor: "#fef9d7",
      badgeTextColor: "rgba(0,0,0,0.5)",
      breadCumbActiveColor: "#fef9d7",
      horSidebarActiveBackColor: "#fff",
      horSidebarActiveTextColor: "#ff5252",
      type: "gredient"
    },
    {
      themeName: "gredient6",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#2ed8b6,#2a5298)",
      backgroundColor: "linear-gradient(45deg,#2ed8b6,#2a5298)",
      textColor: "rgba(255, 255, 255, 1)",
      badgeBackColor: "#fef9d7",
      badgeTextColor: "rgba(0,0,0,0.5)",
      breadCumbActiveColor: "#fef9d7",
      horSidebarActiveBackColor: "#fff",
      horSidebarActiveTextColor: "#2a5298",
      type: "gredient"
    },
    {
      themeName: "gredient7",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#9D50BB,#7b1fa2)",
      backgroundColor: "linear-gradient(45deg,#9D50BB,#7b1fa2)",
      textColor: "rgba(255, 255, 255, .85)",
      badgeBackColor: "rgba(201,221,162,1)",
      badgeTextColor: "#000",
      breadCumbActiveColor: "rgba(201,221,162,1)",
      horSidebarActiveBackColor: "#fff",
      horSidebarActiveTextColor: "#7b1fa2",
      type: "gredient"
    },
    {
      themeName: "gredient8",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,rgba(216,241,230,0.46),#e2ebf0)",
      backgroundColor: "linear-gradient(45deg,rgba(216,241,230,0.46),#e2ebf0)",
      textColor: "rgba(0, 0, 0, .55)",
      badgeBackColor: "#FF6B6B",
      badgeTextColor: "#fff",
      breadCumbActiveColor: "#FF6B6B",
      horSidebarActiveBackColor: "#fff",
      horSidebarActiveTextColor: "#000",
      type: "gredient"
    }
  ]
};

const sidebarTheme = {
  id: "sidebarTheme",
  label: "themeChanger.sidebar",
  defaultTheme: themeConfig.sidebar,
  options: [
    {
      themeName: "sky",
      backgroundColor: "linear-gradient(45deg,#480048, #0ABFBC)",
      textColor: "rgba(255,255,255,.85)",
      activeRouteTextColor: "#480048",
      buttonColor: "rgba(0,0,0,.2)",
      activeRouteBackColor: "#FFF",
      style4VarientActiveTextColor: "#F4C95D",
      sideOpenListBackground: "rgba(0, 0, 0, .05)"
    },
    {
      themeName: "dark",
      backgroundColor: "linear-gradient(to top, #222437, #222437)",
      textColor: "#fff",
      activeRouteTextColor: "#fff",
      buttonColor: "#1E1E2D",
      activeRouteBackColor: "#3a3f51",
      style4VarientActiveTextColor: "#5d78ff",
      sideOpenListBackground: "linear-gradient(to top, #222437, #222437)"
    },
    {
      themeName: "light",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(0,0,0,0.85)",
      buttonColor: "linear-gradient(45deg,#F5F7FA,#B8C6DB)",
      activeRouteBackColor: "linear-gradient(45deg,#F5F7FA,#B8C6DB)",
      style4VarientActiveTextColor: "#5C258D",
      sideOpenListBackground: "rgba(0, 0, 0, .035)"
    },
    {
      themeName: "gredient1",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(255, 255, 255, 1)",
      buttonColor: "linear-gradient(45deg,#5C258D,#4389A2)",
      activeRouteBackColor: "linear-gradient(45deg,#5C258D,#4389A2)",
      style4VarientActiveTextColor: "#583891",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    },
    {
      themeName: "gredient2",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(255, 255, 255, 1)",
      buttonColor:
        "linear-gradient(45deg,rgba(167,139,252,1),rgba(82,107,248,1))",
      activeRouteBackColor:
        "linear-gradient(45deg,rgba(167,139,252,1),rgba(82,107,248,1))",
      style4VarientActiveTextColor: "rgba(82,107,248,1)",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    },
    {
      themeName: "gredient3",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(0,0,0,0.8)",
      buttonColor:
        "linear-gradient(45deg,rgba(255,230,112,1),rgba(255,100,100,0.6))",
      activeRouteBackColor:
        "linear-gradient(45deg,rgba(255,230,112,1),rgba(255,100,100,0.6))",
      style4VarientActiveTextColor: "rgba(255,100,100,1)",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    },
    {
      themeName: "gredient4",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(255, 255, 255, .85)",
      buttonColor:
        "linear-gradient(45deg,rgba(76,79,106,1),rgba(118,124,163,1))",
      activeRouteBackColor:
        "linear-gradient(45deg,rgba(76,79,106,1),rgba(118,124,163,1))",
      style4VarientActiveTextColor: "rgba(118,124,163,1)",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    },
    {
      themeName: "gredient5",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(255, 255, 255, .85)",
      buttonColor: "linear-gradient(45deg, #ff5252, #f48fb1)",
      activeRouteBackColor: "linear-gradient(45deg, #ff5252, #f48fb1)",
      style4VarientActiveTextColor: "#ff5252",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    },
    {
      themeName: "gredient6",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(255, 255, 255, .85)",
      buttonColor: "linear-gradient(45deg,#2ed8b6,#2a5298)",
      activeRouteBackColor: "linear-gradient(45deg,#2ed8b6,#2a5298)",
      style4VarientActiveTextColor: "#2a5298",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    },
    {
      themeName: "gredient7",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "rgba(255, 255, 255, .85)",
      buttonColor: "linear-gradient(45deg,#9D50BB,#7b1fa2)",
      activeRouteBackColor: "linear-gradient(45deg,#9D50BB,#7b1fa2)",
      style4VarientActiveTextColor: "#9D50BB",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    },
    {
      themeName: "gredient8",
      backgroundColor: "#fff",
      textColor: "rgba(0, 0, 0, .87)",
      activeRouteTextColor: "#FF6B6B",
      buttonColor: "linear-gradient(45deg,rgba(216,241,230,0.46),#e2ebf0)",
      activeRouteBackColor:
        "linear-gradient(45deg,rgba(216,241,230,0.46),#e2ebf0)",
      style4VarientActiveTextColor: "#FF6B6B",
      sideOpenListBackground: "rgba(0, 0, 0, .035)",
      type: "gredient"
    }
  ]
};

const layoutTheme = {
  id: "layoutTheme",
  label: "themeChanger.background",
  defaultTheme: themeConfig.layout,
  options: [
    {
      themeName: "themedefault",
      buttonColor: "#fafafa",
      backgroundColor: "rgb(249, 249, 249)",
      cardBackground: "#fff",
      headingColor: "#6a727a",
      textColor: "#000"
    },
    {
      themeName: "theme1",
      buttonColor: "#ffffff",
      backgroundColor: "#ffffff",
      cardBackground: "#fff",
      headingColor: "#6a727a",
      textColor: "#000"
    },
    {
      themeName: "theme2",
      buttonColor: "#F9F9F9",
      backgroundColor: "#F9F9F9",
      cardBackground: "#fff",
      headingColor: "#6a727a",
      textColor: "#000"
    },
    {
      themeName: "theme3",
      buttonColor: "#ebebeb",
      backgroundColor: "#ebebeb",
      cardBackground: "#fff",
      headingColor: "#6a727a",
      textColor: "#000"
    },
    {
      themeName: "theme4",
      buttonColor: "#D9D9D9",
      backgroundColor: "#D9D9D9",
      cardBackground: "#fff",
      headingColor: "#6a727a",
      textColor: "#000"
    },
    {
      themeName: "theme5",
      buttonColor: "#eef5f9",
      backgroundColor: "#eef5f9",
      cardBackground: "#fff",
      headingColor: "#000",
      textColor: "#000"
    },
    {
      themeName: "theme6",
      buttonColor: "#2d3038",
      backgroundColor: "#2d3038",
      cardBackground: "rgba(68, 70, 79, 0.5)",
      headingColor: "#fff",
      textColor: "#949ba2"
    },
    {
      themeName: "theme7",
      buttonColor: "#1c1e2f",
      backgroundColor: "#1c1e2f",
      cardBackground: "#222437",
      headingColor: "#fff",
      textColor: "#949ba2"
    }
  ]
};

const footerTheme = {
  id: "footerTheme",
  label: "themeChanger.footer",
  defaultTheme: themeConfig.footer,
  options: [
    {
      themeName: "dark",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "#222437",
      backgroundColor: "#222437",
      textColor: "#ffffff"
    },
    {
      themeName: "light",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#F5F7FA,#B8C6DB)",
      backgroundColor: "linear-gradient(45deg,#F5F7FA,#B8C6DB)",
      textColor: "rgba(0, 0, 0, .65)"
    },
    {
      themeName: "sky",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#F5F7FA, rgb(10, 191, 188))",
      backgroundColor: "linear-gradient(45deg,#F5F7FA, rgb(10, 191, 188))",
      textColor: "rgba(0, 0, 0, .65)"
    },
    {
      themeName: "gredient1",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#5C258D,#4389A2)",
      backgroundColor: "linear-gradient(45deg,#5C258D,#4389A2)",
      textColor: "#ffffff",
      type: "gredient"
    },
    {
      themeName: "gredient2",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor:
        "linear-gradient(45deg,rgba(167,139,252,1),rgba(82,107,248,1))",
      backgroundColor:
        "linear-gradient(45deg,rgba(167,139,252,1),rgba(82,107,248,1))",
      textColor: "#ffffff",
      type: "gredient"
    },
    {
      themeName: "gredient3",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor:
        "linear-gradient(45deg,rgba(255,230,112,1),rgba(255,100,100,0.6))",
      backgroundColor:
        "linear-gradient(45deg,rgba(255,230,112,1),rgba(255,100,100,0.6))",
      textColor: "rgba(0,0,0,0.8)",
      type: "gredient"
    },
    {
      themeName: "gredient4",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor:
        "linear-gradient(45deg,rgba(76,79,106,1),rgba(118,124,163,1))",
      backgroundColor:
        "linear-gradient(45deg,rgba(76,79,106,1),rgba(118,124,163,1))",
      textColor: "rgba(255,255,255,.85)",
      type: "gredient"
    },
    {
      themeName: "gredient5",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg, #ff5252, #f48fb1)",
      backgroundColor: "linear-gradient(45deg, #ff5252, #f48fb1)",
      textColor: "rgba(255,255,255,.85)",
      type: "gredient"
    },
    {
      themeName: "gredient6",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#2ed8b6,#2a5298)",
      backgroundColor: "linear-gradient(45deg,#2ed8b6,#2a5298)",
      textColor: "#ffffff",
      type: "gredient"
    },
    {
      themeName: "gredient7",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,#9D50BB,#7b1fa2)",
      backgroundColor: "linear-gradient(45deg,#9D50BB,#7b1fa2)",
      textColor: "rgba(255,255,255,.85)",
      type: "gredient"
    },
    {
      themeName: "gredient8",
      buttonBackColor: "rgba(0, 0, 0, .1)",
      buttonColor: "linear-gradient(45deg,rgba(216,241,230,0.46),#e2ebf0)",
      backgroundColor: "linear-gradient(45deg,rgba(216,241,230,0.46),#e2ebf0)",
      textColor: "rgba(0,0,0,0.8)",
      type: "gredient"
    }
  ]
};

const customizedThemes = {
  changeThemes,
  topbarTheme,
  sidebarTheme,
  layoutTheme,
  footerTheme
};

export function getCurrentTheme(attribute, selectedThemename) {
  let selecetedTheme = {};
  customizedThemes[attribute].options.forEach(theme => {
    if (theme.themeName === selectedThemename) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}
export default customizedThemes;
