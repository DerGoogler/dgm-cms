const config = {
  base: {
    slug: "/pages/",
    defaultPage: "home",
    defaultDrawerPage: "drawer",
    configPath: "config",
    file: ".dgm",
    aftertitle: " – Der_Googler",
    domain: "dergoogler.com",
    platform: "android",
    github: {
      IoPage: "dergoogler.github.io",
      gHusername: "DerGoogler",
      branch: "master",
    },
  },
  options: {
    drawer: {
      isDrawerOpen: false,
      width: 250, // don't make it over 500!
      collapse: true,
      swipeable: true,
    },
  },
};

export default config;
