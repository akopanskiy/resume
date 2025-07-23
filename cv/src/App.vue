<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.path);

</script>

<template>
	<nav v-if="route.path === '/'">
		<ul class="flex gap-10">
			<li>
				<RouterLink to="/akopanskyi-cv" >
					<div class="">
						<img src="/bob.jpg" class="h-[80vh]">
					</div>
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/lkutsyk-cv">
					<div class="">
						<img src="/liuk.jpg" class="h-[80vh]">
					</div>
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/akopanskyi-cv-2">
					<div class="">
						<img src="/img.png" class="h-[80vh]">
					</div>
				</RouterLink>
			</li>
		</ul>
	</nav>
	<main>
		<RouterView />
	</main>
</template>

<style scoped>
</style>

