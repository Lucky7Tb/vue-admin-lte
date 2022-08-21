import AppLayout from "../layouts/AppLayout.vue";

export default [
	{
		path: "/",
		name: "AppLayout",
		component: AppLayout,
		children: [
			{
				path: "/",
				name: "dashboard",
				// route level code-splitting
				// this generates a separate chunk (About.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import("../views/DashboardView.vue"),
			},
			{
				path: "/:catchAll(.*)",
				name: "404",
				component: () => import("../views/404View.vue"),
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/LoginView.vue"),
	},
];
