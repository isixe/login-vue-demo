import { createRouter, createWebHistory } from "vue-router";

export const constantRoutes = [
	{
		path: "/",
		name: "index",
		redirect: "/login",
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login"),
	},
	{
		path: "/register",
		name: "register",
		component: () => import("@/views/register"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: constantRoutes,
});

export function resetRouter() {
	const newRouter = createRouter({
		history: createWebHistory("/"),
		routes: constantRoutes,
		scrollBehavior: () => ({ left: 0, top: 0 }),
	});

	router.matcher = newRouter.matcher;
}

export default router;
