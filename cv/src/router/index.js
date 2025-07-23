import { createWebHashHistory, createRouter } from 'vue-router'

import AndriiCV from "@/components/AndriiCV.vue";
import LiudmilaCV from "@/components/LiudmilaCV.vue";
import AndriiCV2 from "@/components/AndriiCV2.vue";

const routes = [
	{ path: '/' },
	{ path: '/akopanskyi-cv', component: AndriiCV },
	{ path: '/lkutsyk-cv', component: LiudmilaCV },
	{ path: '/akopanskyi-cv-2', component: AndriiCV2 },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router;