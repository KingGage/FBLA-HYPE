import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/about",
      alias: "/about",
      name: "about",
      component: () => import("./components/About")
    },
    {
      path: "/build",
      alias: "/build",
      name: "build",
      component: () => import("./components/Build")
    },
    {
      path: "/develop",
      alias: "/develop",
      name: "develop",
      component: () => import("./components/Develop")
    },
    {
      path: "/deploy",
      alias: "/deploy",
      name: "deploy",
      component: () => import("./components/Deploy")
    },
    {
      path: "/team",
      alias: "/team",
      name: "team",
      component: () => import("./components/Team")
    }
  ]
});
