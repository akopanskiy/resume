<script setup>
import { KEY_SKILLS } from "@/utils/variables.js";

</script>

<template>
	<div class="flex flex-col gap-10 max-w-full">
		<div class="flex justify-between">
			<img src="../../public/Liudmyla%20K..jpeg" alt="photo" width="200"/>
			<div>
				<h2 class="text-5xl font-black pb-1.5">Liudmyla Kutsyk</h2>
				<span class="text-3xl font-extrabold pb-1.5">Senior Talent Acquisition & Recruitment Specialist</span>
				
				<div class="flex flex-col text-xl">
					<span><span class="font-bold">Location:</span> Ukraine | Open to remote & international opportunities</span>
					<span><span class="font-bold">Mobile:</span> +380991147116</span>
					<span><span class="font-bold">Email:</span> liudmilakutsyk@gmail.com</span>
					<span>
						<span class="font-bold">LinkedIn:</span>
						<a href="https://www.linkedin.com/in/liudmyla-kutsyk-647a12152/" target="_blank">
							https://www.linkedin.com/in/liudmyla-kutsyk-647a12152/
						</a>
					</span>
				</div>
			</div>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Summary</h3>
			<el-divider />
			<p>
				Results-driven Talent Acquisition Specialist with over 7 years of experience in full-cycle recruitment for
				both technical and non-technical roles across Ukraine, Europe, the US, and LATAM. Proven track record
				of exceeding hiring targets, mentoring recruiters and sourcer, and supporting complex international
				hiring processes. Strong background in stakeholder management, process improvement, and employee onboarding.
				Passionate about creating an excellent candidate experience and contributing to the long-term success of
				growing teams.
			</p>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Key Skills</h3>
			<el-divider />
			
			<ul class="list-disc pl-4" v-for="(skill, index) in KEY_SKILLS">
				<li :key="index">
					<span class="font-bold">{{ skill }}</span>
				</li>
			</ul>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Work Experience</h3>
			<el-divider />
			
			<div>
				<h4 class="text-xl font-bold text-[#b5a642] pb-1.5">ELEKS | Global IT services company</h4>
			
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Senior Talent Acquisition Consultant</span>
					<span class="font-bold">Jan 2023 – Present</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Lead full-cycle recruitment for complex technical and non-technical positions across Ukraine, Europe, the US, and Argentina.</li>
						<li>Provide end-to-end support for Green Card candidates during the recruitment process.</li>
						<li>Participate in workshops and career events for students, promoting career growth in the tech industry.</li>
					</ul>
				</div>
			
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Talent Acquisition Consultant</span>
					<span class="font-bold">Jul 2021 – Jan 2023 (1 year 7 months)</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Expanded recruitment activities to new regions, including Europe, the US, and Argentina, covering
							both technical and non-technical roles.</li>
						<li>Handled complex software engineering vacancies and strategic corporate positions.</li>
						<li>Completed "Veteran Employment Support" training to better assist veterans with job search,
							career change, CV and interview preparation.</li>
						</ul>
				</div>
			
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Talent Acquisition Specialist</span>
					<span class="font-bold">Dec 2020 – Jun 2021 (7 months)</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Managed full-cycle recruitment for technical and non-technical roles in Ukraine, including C-level
							support staff, product specialists, SDRs, QA professionals, Compensation & Benefits experts,
							and Product Implementation Analysts.</li>
						<li>Consistently met and exceeded recruitment KPIs and contributed to team growth.</li>
					</ul>
				</div>
			</div>
			<div>
				<h4 class="text-xl font-bold text-[#b5a642] pb-1.5">
					Temy | Service company for startup development (Europe, US, Middle East)
				</h4>
				
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Talent Acquisition Specialist</span>
					<span class="font-bold">Aug 2018 – Dec 2020 (2 years 6 months)</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>
							Full-cycle recruitment for both technical and non-technical roles — from gathering requirements
							and creating job descriptions to posting vacancies, sourcing candidates, screening applicants,
							conducting interviews, organizing further stages, preparing candidate profiles, managing offer
							processes, and onboarding new hires — all while meeting deadlines and business targets.
						</li>
						<li>Partial mentoring of two trainee recruiters, whom I hired to the team after just over a year of working at the company.</li>
						<li>Mentoring a trainee sourcer, who has since grown into a Lead role.</li>
						<li>Actively supporting my colleagues in preparing for meet-ups, tech talks, and corporate events.</li>
					</ul>
				</div>
			</div>
			<div>
				<h4 class="text-xl font-bold text-[#b5a642] pb-1.5">
					Lvivoblenergo | Energy Distribution Company
				</h4>
				
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Human Resources Recruiter</span>
					<span class="font-bold">Feb 2018 – July 2018 (6 months)</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Responsible for recruitment processes and adaptation of new employees.</li>
						<li>Developed strong foundations in hiring practices, contributing to company HR goals while continuously improving recruitment skills.</li>
					</ul>
				</div>
			</div>
			<div>
				<h4 class="text-xl font-bold text-[#b5a642] pb-1.5">
					Vodafone Ukraine | Telecommunications Provider
				</h4>
				
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold">Customer Support Specialist</span>
					<span class="font-bold">Jan 2016 – Dec 2017 (1 year 11 months)</span>
				</div>
				<div class="pl-4 pb-2.5">
					<ul class="list-disc pl-4">
						<li>Provided customer support for mobile services, connectivity, and tariff-related inquiries.</li>
						<li>Acted as the main contact point between the support and development teams during CRM system rollout.</li>
						<li>Collected and documented bugs, provided structured team feedback, participated in retrospectives and planning sessions.</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div>
			<h3 class="text-4xl font-bold text-[#900020] pb-2.5">Education & Certifications</h3>
			<el-divider />
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold text-xl text-[#b5a642]">Lviv Polytechnic National University</span>
					<span class="font-bold">Master’s Degree, Pharmaceutical Biotechnology</span>
					<span class="font-bold">2008 - 2013 | Lviv, Ukraine</span>
				</div>
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold text-xl text-[#b5a642]">Ivan Franko National University of Lviv</span>
					<span class="font-bold">Specialist Degree, Psychology</span>
					<span class="font-bold">2012 - 2015 | Lviv, Ukraine</span>
				</div>
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold text-xl text-[#b5a642]">GO IT</span>
					<span class="font-bold">Certificate in HTML & CSS Fundamentals</span>
					<span class="font-bold">2020</span>
				</div>
				<div class="flex flex-col gap-1 pb-2.5">
					<span class="font-bold text-xl text-[#b5a642]">Veteran Employment Awareness Training for Employers</span>
					<span class="font-bold">Completed course on employment specifics for veterans</span>
					<span class="font-bold">July 2023</span>
				</div>
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
						 Upper Intermediate
					</span>
				</li>
				<li >
					<span>
						<span class="font-bold pr-1">German:</span>
						 Beginner/ Elementary
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

