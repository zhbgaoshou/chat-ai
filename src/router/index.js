import { createWebHistory, createRouter } from "vue-router";

export const navRoutes = [
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/Chat.vue"),
    meta: {
      title: "聊天",
      icon: "comment-o",
      keepAlive: true,
    },
  },
  {
    path: "/model",
    name: "model",
    component: () => import("@/views/Model.vue"),
    meta: {
      title: "模型",
      icon: "list-switching",
      keepAlive: true,
    },
  },
];

const routes = [
  {
    path: "/",
    redirect: "/chat",
  },
  ...navRoutes,
];

function initRouter() {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
}

const router = initRouter();

export default router;
