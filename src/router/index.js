import Vue from "vue";
import VueRouter from "vue-router";
// all pages
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Advantages from "../views/Advantages.vue";
import Common from "../views/Common.vue";
import Condition from "../views/Condition.vue";
import Detials from "../views/Detials.vue";
import News from "../views/News.vue";
import Privacy from "../views/Privacy.vue";
import Service from "../views/Service.vue";
// all pages
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:"Home",
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta:{
      title:"About",
    }
  },
  {
    path: "/advantages",
    name: "Advantages",
    component: Advantages,
    meta:{
      title:"Advantages",
    }
  },
  {
    path: "/common",
    name: "Common",
    component: Common,
    meta:{
      title:"Advantages",
    }
  },
  {
    path: "/condition",
    name: "Condition",
    component: Condition,
    meta:{
      title:"Condition",
    }
  },
  {
    path: "/detials",
    name: "Detials",
    component: Detials,
    meta:{
      title:"Detials",
    }
  },
  {
    path: "/news",
    name: "News",
    component: News,
    meta:{
      title:"News",
    }
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
    meta:{
      title:"Privacy",
    }
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
    meta:{
      title:"Service",
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to , from ,next)=>{
  document.title =`${to.meta.title} | Esaafy`;
  next();
});
export default router;
