import Vue from "vue";
import VueRouter from "vue-router";

import Guide from "../views/_guide"; //GuidePage
import Main from "../views/Main"; //Main

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/guide",
    name: "Guide",
    component: Guide,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
