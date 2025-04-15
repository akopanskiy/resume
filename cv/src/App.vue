<script setup>
import { TECH_SKILLS, SOFT_SKILLS, PROJECTS } from "@/utils/variables.js";

</script>

<template>
	<div class="flex flex-col gap-10 max-w-[60%]">
		<div class="flex justify-between">
			<img src="../public/myphoto.jpeg" width="200"/>
			<div>
				<h2 class="text-5xl font-black pb-2.5">Andrii Kopanskyi</h2>
				
				<div class="flex flex-col text-xl">
					<span><span class="font-bold">Address:</span> Ukraine, Lviv</span>
					<span><span class="font-bold">Mobile:</span> +380996279915</span>
					<span><span class="font-bold">Email:</span> andriikopanskiy@gmail.com</span>
				</div>
			</div>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Summary</h3>
			<el-divider />
			<p>
				Front-end Developer with 3 years of commercial experience developing and maintaining scalable web
				applications. Proficient in JavaScript, TypeScript, Vue.js, React, and modern front-end ecosystems. Skilled in
				performance optimization, code refactoring, and implementing responsive UI. Known for strong
				communication skills, attention to detail, and effective collaboration with cross-functional teams. Passionate
				about learning new technologies and contributing to project success.
			</p>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Technical Skills</h3>
			<el-divider />
			
			<ul class="list-disc pl-4" v-for="(skill, index) in TECH_SKILLS">
				<li :key="index">
					<span><span class="font-bold pr-1">{{ skill.name }}:</span>{{ skill.item }}</span>
				</li>
			</ul>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Soft Skills</h3>
			<el-divider />
			
			<ul class="list-disc pl-4" v-for="(skill, index) in SOFT_SKILLS">
				<li :key="index">
					<span class="font-bold">{{ skill }}</span>
				</li>
			</ul>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Work Experience</h3>
			<el-divider />
			
			<div class="flex gap-10 pb-2.5">
				<span class="font-bold">Mar 2022 - February 2025</span>
				<span class="font-bold">Frontend Developer</span>
				<span class="font-bold">Hevelian</span>
			</div>
			
			<div>
				<h3 class="font-bold">Projects</h3>
				
				<ul class="pl-4" v-for="(project, index) in PROJECTS">
					<li class="pb-2.5" :key="index">
						<h4 class="font-bold text-[#b5a642]">{{ project.name }}</h4>
						<p>
							<span class="font-bold">Tech Stack:</span>
							{{ project.stack }}
						</p>
						<ul class="list-disc pl-4" v-for="(item, i) in project.item">
							<li :key="i">{{ item }}</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Education</h3>
			<el-divider />
			
			<div class="flex gap-10 pb-2.5">
				<span class="font-bold">Sep 2006 - Jun 2012 | Lviv, Ukraine</span>
				<span class="font-bold">Ivan Franko National University of Lviv</span>
				<span class="font-bold">Faculty of Mechanics and Mathematics</span>
			</div>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Languages</h3>
			<el-divider />
			
			<ul class="list-disc pl-4">
				<li >
					<span>
						<span class="font-bold pr-1">Ukrainian:</span>
						Native
					</span>
				</li>
				<li >
					<span>
						<span class="font-bold pr-1">English:</span>
						 Intermediate
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
:deep(.el-divider) {
	margin: 0;
	border-top: 3px solid #906700;
	padding-bottom: 10px;
}
</style>

