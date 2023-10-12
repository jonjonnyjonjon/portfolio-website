import DoransInn from "../images/dorans-inn.png";
import Antbuildz from "../images/antbuildz.png";
import ITSAUI from "../images/itsa-ui.png";
import CPSArchi from "../images/cps-archi.jpg";
import ProjectCard from "../components/ProjectCard";

const projects = [
	{
		name: "E-commerce website",
		synopsis:
			"A web app that simulates the purchasing process on an e-commerce shopping platform. Utilizes Flask to build a microservice architecture and a message-oriented middleware, RabbitMQ.",
		imgSrc: DoransInn,
	},
	{
		name: "Bidding Platform",
		synopsis:
			"A web app for the construction industry to rent and loan industrial equipment. Search for your wanted equipment and place your desired bids on them.",
		imgSrc: Antbuildz,
	},
	{
		name: "Task Reminder IoT Setup",
		synopsis: "Developing a setup to help Persons with Intellectual Disabilities to remind them to complete daily tasks. This project is built using various internet-of-things items.",
		imgSrc: CPSArchi,
	},
	{
		name: "Transactions Processing Pipeline",
		synopsis:
			"Making use of AWS to process millions of transactions daily by creating an automated pipeline. Terraform was introduced to enable fast development.",
		imgSrc: ITSAUI,
	},
];

const Projects = () => {
	return (
		<div className="mx-auto max-w-2xl p-12 md:py-32" id="projects">
			<p className="text-3xl font-bold pb-12">Projects</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
