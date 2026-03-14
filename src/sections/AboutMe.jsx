import { motion } from "framer-motion";

export default function AboutMe() {
	const skills = [
		"JavaScript",
		"TypeScript",
		"React",
		"Node.js",
		"Python",
		"AWS",
		"Java",
		"MySQL",
		"MongoDB",
		"Docker",
		"Kubernetes",
		"GraphQL",
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="mx-auto max-w-6xl px-6 py-20 md:py-32 scroll-mt-[64px]"
			id="aboutMe"
		>
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-12 text-center"
			>
				About <span className="text-accent-500">Me</span>
			</motion.h2>

			{/* Bento grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
				{/* Bio Card - spans 2 columns */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.6 }}
					className="lg:col-span-2 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
				>
					<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
						<span className="w-2 h-8 bg-accent-500 rounded-full"></span>
						Who I Am
					</h3>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
						I'm a Software Engineer based in Singapore with a passion for
						building scalable systems and intuitive user interfaces. With
						experience at DBS Bank, Accenture, and TikTok, I've worked on
						diverse projects ranging from enterprise banking systems to
						consumer-facing mobile applications.
					</p>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
						When I'm not coding, you can find me exploring new technologies,
						mentoring junior developers, or gaming. I believe in writing clean
						code that stands the test of time and creating products that make
						a real impact on users' lives.
					</p>
				</motion.div>

				{/* Skills Card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
				>
					<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
						<span className="w-2 h-8 bg-accent-500 rounded-full"></span>
						Tech Stack
					</h3>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill) => (
							<span
								key={skill}
								className="px-3 py-1 bg-white dark:bg-gray-700 text-accent-600 dark:text-accent-400 border border-accent-200 dark:border-accent-800 rounded-full text-sm font-medium"
							>
								{skill}
							</span>
						))}
					</div>
				</motion.div>

				{/* Education Card - spans full width on larger screens */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.6 }}
					className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-accent-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
				>
					<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
						<span className="w-2 h-8 bg-accent-500 rounded-full"></span>
						Education
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h4 className="font-medium text-gray-900 dark:text-white mb-1">
								Bachelor of Science (Information Systems)
							</h4>
							<p className="text-accent-600 dark:text-accent-400 text-sm mb-2">
								Singapore Management University
							</p>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Graduated 2022
							</p>
						</div>
						<div>
							<h4 className="font-medium text-gray-900 dark:text-white mb-1">
								Coming soon!
							</h4>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Additional certifications and courses will be added here.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
