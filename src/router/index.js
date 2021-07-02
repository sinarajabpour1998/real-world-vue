import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList";
import EventShow from "../views/EventShow";
import EventCreate from "../views/EventCreate";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
