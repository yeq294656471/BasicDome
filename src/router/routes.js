const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "CounterNum", component: () => import("pages/CounterNum.vue") },
      { path: "AddParam", component: () => import("pages/AddParam.vue") },
      { path: "PiniaDome", component: () => import("pages/PiniaDome.vue") },
      {
        path: "AddDeleteModify",
        component: () => import("pages/AddDeleteModify.vue"),
      },
      {
        path: "TableAddDelete",
        component: () => import("pages/TableAddDelete.vue"),
      },
      { path: "CS", component: () => import("pages/CS.vue") },
      {
        path: "BoxTooltip",
        component: () => import("src/pages/BoxTooltip.vue"),
      },
      { path: "TableBox", component: () => import("pages/TableBox.vue") },
      { path: "FormNotify", component: () => import("pages/FormNotify.vue") },
      { path: "TableTest01", component: () => import("pages/TableTest01.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
