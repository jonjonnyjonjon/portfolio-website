import DoransInn from "../images/dorans-inn.png";
import AntbuildzUI from "../images/antbuildz.png";
import ITSAUI from "../images/itsa-ui.png";
import CPSArchi from "../images/cps-archi.jpg";
import FYPUI from "../images/fyp-screen.png";
import MobileUI from "../images/mobile-nav.jpg";

import ProjectCard from "../components/ProjectCard";

const projects = [
	{
		name: "Transactions Processing Pipeline",
		synopsis:
			"An automated pipeline that aims to process millions of transactions daily by using Amazon Web Services (AWS).",
		imgSrc: ITSAUI,
		sponsor: "Ascenda Loyalty",
		skills: ["aws", "terraform"],
		video: "",
	},
	{
		name: "ShopNav AR",
		synopsis:
			"A wayfinding mobile application that allows user to find their way in a supermarket. The user is able to choose between <b>2D or 3D navigation methods</b>.",
		imgSrc: MobileUI,
		sponsor: "",
		skills: ["kotlin", "google arcore", "indooratlas", "stripe api"],
		video: "https://www.youtube.com/watch?v=QO8BzgvmDGk",
	},
	{
		name: "Data Entry Platform",
		synopsis:
			"A centralised platform for engineers to key in data from their respective projects.",
		imgSrc: FYPUI,
		sponsor: "Sembcorp",
		skills: ["reactjs", "nodejs", "mysql", "grafana"],
		video:
			"https://drive.google.com/file/d/1XWapJvYvnRgOKOUxbrLQ6zPZFr4mAqm5/view?usp=share_link",
	},
	{
		name: "Task Reminder IoT Setup",
		synopsis:
			"Developing a setup to help Persons with Intellectual Disabilities to remind them to complete daily tasks. This project is built using various internet-of-things items.",
		imgSrc: CPSArchi,
		sponsor: "MINDS Singapore",
		skills: ["reactjs", "firebase", "raspberry pi", "3d printing"],
		video: "https://www.youtube.com/watch?v=sAv0T6iJzFU",
	},
	{
		name: "Doran's Inn",
		synopsis:
			"An e-commerce web app that simulates the purchasing and payment process.",
		imgSrc: DoransInn,
		sponsor: "",
		skills: ["jinja2", "flask", "rabbitmq", "sqlalchemy"],
		video: "",
	},
	{
		name: "Bidding Platform",
		synopsis:
			"A web app for the construction industry to rent and loan industrial equipment. Search for your wanted equipment and place your desired bids on them.",
		imgSrc: AntbuildzUI,
		sponsor: "Antbuildz",
		skills: ["java", "springboot", "thymeleaf"],
		video: "",
	},
];

const Projects = () => {
	return (
		<div
			className="mx-auto max-w-5xl p-12 scroll-mt-[64px] md:py-32"
			id="projects"
		>
			<p className="text-3xl font-bold pb-12">Projects</p>

			<div className="grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
