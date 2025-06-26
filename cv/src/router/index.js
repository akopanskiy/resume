import { createWebHistory, createRouter } from 'vue-router'

import AndriiCV from "@/components/AndriiCV.vue";
import LiudmilaCV from "@/components/LiudmilaCV.vue";

const routes = [
	{ path: '/' },
	{ path: '/akopanskyi-cv', component: AndriiCV },
	{ path: '/lkutsyk-cv', component: LiudmilaCV },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;