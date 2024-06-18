import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/RegisterComponent.vue";
import Login from "../components/LoginComponent.vue";
import Profile from "../components/ProfileComponent.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
