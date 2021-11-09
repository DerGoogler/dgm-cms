const config = {
  base: {
    slug: "/pages/",
    defaultPage: "home",
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
    snowflakes: {
      amount: 40,
      color: ["#AAAACC", "#DDDDFF", "#CCCCDD", "#F3F3F3", "#F0FFFF"],
      type: ["Arial Black", "Arial Narrow", "Times", "Comic Sans MS"],
      flakeChar: "*",
      spped: 0.05,
      minSize: 8,
      maxSize: 22,
      drift: 15,
    },
    fireworks: {
      color: [
        "#D0D0D0",
        "#FF0000",
        "#FFFF00",
        "#22FF00",
        "#2040FF",
        "#00CCFF",
        "#FF00FF",
        "#A319D6",
      ],
      gravity: 0.07,
      resistance: 0.975,
      maxAge: 2000,
      interval: [500, 2500],
      particlesPerExplosion: 40,
      speed: 5,
      minSize: 8,
      maxSize: 12,
    },
  },
};

export default config;
