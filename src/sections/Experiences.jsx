import { motion } from "framer-motion";
import TikTokLogo from "../images/tiktok-logo.svg";
import ContinentalLogo from "../images/continental-logo.png";
import AccentureLogo from "../images/accenture-logo.svg";
import DBSLogo from "../images/dbs-logo.png";

const items = [
	{
		logo: DBSLogo,
		title: "Backend Engineer (SEED)",
		company: "DBS Bank",
		duration: "Jun 2023 - Present",
		description: ["Coming soon!"],
	},
	{
		logo: AccentureLogo,
		title: "Software Engineer Intern",
		company: "Accenture",
		duration: "Jan 2023 - Apr 2023",
		description: [
			"Created a scanner for job control statements to check for mistakes and corrected them to reduce deployment time and man-made errors",
			"Automated the retrieval of issues on the SonarQube platform using their API endpoints and exported them into an Excel file for further analysis to improve the quality of the codebase",
		],
	},
	{
		logo: TikTokLogo,
		title: "Software Engineer Intern",
		company: "TikTok",
		duration: "May 2022 - Aug 2022",
		description: [
			"Optimised user workflow for better user experience on Cookie Management Platform",
			"Developed a Chrome Extension to monitor and record network logs and cookies",
			"Documented key project procedures for setup, user and troubleshooting guides",
		],
	},
	{
		logo: ContinentalLogo,
		title: "Data Analyst Intern",
		company: "Continental Automotive Group",
		duration: "Jun 2020 - Aug 2020",
		description: [
			"Developed scripts for data generation using Excel VBA and Power Query",
			"Introduced Microsoft Power Automate to improve efficiency in uploading tasks on Microsoft SharePoint",
			"Proposed and reworked on report generation process flows by using Microsoft Power Automate and Excel Macro",
		],
	},
];

const Experiences = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="mx-auto max-w-4xl px-6 py-20 md:py-32 scroll-mt-[64px]"
			id="experiences"
		>
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-12 text-center"
			>
				Work <span className="text-accent-500">Experience</span>
			</motion.h2>

			<div className="relative border-l-4 border-gray-200 dark:border-gray-700 space-y-8">
				{items.map((item, index) => (
					<motion.div
						key={item.company}
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: index * 0.15,
							duration: 0.6,
							ease: "easeOut",
						}}
					>
						{/* Timeline dot with logo */}
						<div className="absolute -left-[17px]">
							<div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-accent-500 flex items-center justify-center">
								<img
									src={item.logo}
									alt={item.company}
									className="w-4 h-4 object-contain"
								/>
							</div>
						</div>

						{/* Card */}
						<motion.div
							whileHover={{
								y: -5,
								boxShadow:
									"0 20px 40px -10px rgba(0, 0, 0, 0.15)",
							}}
							className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 ml-4 transition-shadow"
						>
							<div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									{item.title}
								</h3>
								<time className="text-sm text-accent-600 dark:text-accent-400 font-medium">
									{item.duration}
								</time>
							</div>
							<p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
								{item.company}
							</p>
							{item.description[0] === "Coming soon!" ? (
								<p className="text-gray-400 italic text-sm">
									Details coming soon
								</p>
							) : (
								<ul className="space-y-2">
									{item.description.map(
										(point, pointIndex) => (
											<li
												key={pointIndex}
												className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
											>
												<span className="text-accent-500 mt-1.5">
													•
												</span>
												<span>{point}</span>
											</li>
										)
									)}
								</ul>
							)}
						</motion.div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default Experiences;
