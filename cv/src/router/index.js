import { createWebHashHistory, createRouter } from 'vue-router'

import AndriiCV from "@/components/AndriiCV.vue";
import LiudmilaCV from "@/components/LiudmilaCV.vue";

const routes = [
	{ path: '/' },
	{ path: '/akopanskyi-cv', component: AndriiCV },
	{ path: '/lkutsyk-cv', component: LiudmilaCV },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router;