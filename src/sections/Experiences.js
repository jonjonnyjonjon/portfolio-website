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
		company: "Cotinental Automotive Group",
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
		<div
			className="mx-auto max-w-2xl p-12 scroll-mt-[64px] md:py-32"
			id="experiences"
		>
			<p className="text-3xl font-bold pb-12">Experiences</p>

			<ol className="relative border-l-4 border-[#DCD9D4] dark:border-gray-200 dark:border-gray-700">
				{items.map((item) => (
					<li className="mb-10 ml-10" key={item.company}>
						<span className="absolute flex items-center justify-center w-14 h-14 bg-white rounded-full -left-8 ">
							<img src={item.logo} alt="logo" width="40px" height="40px" />
						</span>
						<h3 className="flex items-center mb-1 text-lg font-semibold">
							{item.title}
						</h3>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							{item.duration}
						</time>
						<div className="mb-4 text-base font-normal text-gray-600 dark:text-white">
							<ul className="list-none">
								{item.description.map((point, index) => (
									<li
										key={index}
										className="before:content-['•'] before:text-white-700 before:inline-block before:w-3"
									>
										{point}
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Experiences;
