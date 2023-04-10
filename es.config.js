module.exports = {
  apps: [
    {
      name: "react-app-as",
      script: "yarn",
      args: "start",
      cwd: "./react-app-as",
    },
    {
      name: "express-app-as",
      script: "yarn",
      args: "dev",
      cwd: "./express-app-as",
      // env: {
      //   "PORT": 5000,
      // },
    },
    // {
    //   name: "express-app-as",
    //   script: "yarn",
    //   args: "dev",
    //   cwd: "./express-app-as",
    //   env: {
    //     PORT: 5001,
    //   },
    // },
  ],
};
