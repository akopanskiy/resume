<script setup>
import { TECH_SKILLS, SOFT_SKILLS, PROJECTS } from "@/utils/variables.js";

</script>

<template>
	<div class="flex flex-col gap-10 max-w-full">
		<div class="flex justify-between">
			<img src="../../public/myphoto.jpeg" width="200"/>
			<div>
				<h2 class="text-5xl font-black pb-2.5">Andrii Kopanskyi</h2>
				
				<div class="flex flex-col text-xl">
					<span><span class="font-bold">Address:</span> Ukraine, Lviv</span>
					<span><span class="font-bold">Mobile:</span> +380996279915</span>
					<span><span class="font-bold">Email:</span> andriikopanskiy@gmail.com</span>
				</div>
			</div>
		</div>
		
<!--		<div>-->
<!--			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Summary</h3>-->
<!--			<el-divider />-->
<!--			<p>-->
<!--				Front-end Developer with 3+ years of experience in building responsive, scalable Single Page-->
<!--				Applications using Vue.js, React, and modern front-end ecosystems. Specializing in healthcare-->
<!--				platforms and data visualization dashboards. Strong in performance optimization, clean architecture,-->
<!--				and UI/UX alignment. Proactive communicator with a passion for learning and delivering impactful digital-->
<!--				experiences.-->
<!--			</p>-->
<!--		</div>-->
		
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
			
			<h4 class="text-xl font-bold text-[#b5a642] pb-1.5">Hevelian</h4>
			
			<div class="flex flex-col gap-1 pb-2.5">
				<span class="font-bold">Frontend Developer</span>
				<span class="font-bold">Mar 2022 – Present</span>
			</div>
			
			<div class="pb-2">
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
			
			<div>
				<h4 class="text-xl font-bold text-[#b5a642] pb-1.5">Vodafone Ukraine</h4>
				
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Online Store Operator / E-commerce Specialist</span>
					<span class="font-bold">Mar 2018 – Jan 2020</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Processing online orders through the company website (devices, SIM cards, plans).</li>
						<li>Consulting customers via phone, email, and chat on product features, payment, and delivery.</li>
						<li>Monitoring product availability and updating order statuses in internal systems.</li>
						<li>Providing full customer support throughout the purchase process.</li>
						<li>Coordinating with logistics and courier services.</li>
						<li>Handling post-sale services: returns, exchanges, and warranty claims.</li>
					</ul>
				</div>
				
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Sales Manager / Active Sales Specialist </span>
					<span class="font-bold">Sep 2017 – Mar 2018</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Actively selling mobile services, tariffs, devices, and add-on products to customers.</li>
						<li>Providing professional consultations tailored to customer needs and preferences.</li>
						<li>Achieving individual and team sales targets.</li>
						<li>Attracting new customers and retaining existing ones.</li>
						<li>Handling inbound and outbound calls for sales and upselling purposes.</li>
						<li>Managing objections and building strong client relationships.</li>
					</ul>
				</div>
				
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Call Center Consultant</span>
					<span class="font-bold">Feb 2012 – Sep 2017</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Answering incoming customer calls and providing consultations on Vodafone services.</li>
						<li>Offering technical support regarding network issues, SIM cards, and service setup.</li>
						<li>Maintaining accurate customer data and logging interactions in the CRM system.</li>
						<li>Informing clients about current promotions, tariffs, and service updates.</li>
						<li>Resolving conflicts and ensuring customer satisfaction and loyalty.</li>
						<li>Following company service standards and communication protocols.</li>
					</ul>
				</div>
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

