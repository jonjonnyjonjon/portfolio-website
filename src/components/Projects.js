// import { FaPython, FaJava, FaGithub } from "react-icons/fa";
// import { GrMysql } from "react-icons/gr";
// import {
//   SiSpringboot,
// 	SiHibernate,
// 	SiApachemaven,
// 	SiThymeleaf,
// 	SiRabbitmq,
// 	SiJinja,
// } from "react-icons/si";
import {
  Box,
	// Card,
	// CardBody,
	// CardFooter,
	Grid,
	Heading,
	Image,
	// Stack,
	// Text,
	useColorModeValue,
} from "@chakra-ui/react";
// import SkillBadge from "./SkillBadge";
import DoransInn from "../images/dorans-inn.png";
import Antbuildz from "../images/antbuildz.png";

const Projects = () => {
	const bg = useColorModeValue(
		"white",
		"linear-gradient(to top, #193041, #1f2332, #1d1922, #140e13, #000000);"
	);

	return (
		<Box h="100vh" px="100px" bg={bg}>
			<Heading mb={5}>Projects</Heading>

			<Grid templateColumns="repeat(5, 1fr)" gap={6}>
				<Image
					objectFit="cover"
					// maxW={{ base: "100%", sm: "200px" }}
					src={DoransInn}
					alt="Doran's Inn"
				/>

				<Image
					objectFit="cover"
					// maxW={{ base: "100%", sm: "200px" }}
					src={Antbuildz}
					alt="Antbuildz"
				/>
			</Grid>
			<Heading>WIP</Heading>
			{/* <Card
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="outline"
			>
				<Image
					objectFit="cover"
					maxW={{ base: "100%", sm: "200px" }}
					src={DoransInn}
					alt="Doran's Inn"
				/>

				<Stack>
					<CardBody>
						<Heading>League of Legends e-commerce site</Heading>

						<Text py="2">
							A web app that simulates the purchasing process on an e-commerce
							shopping platform. Utilizes Flask to build a microservice
							architecture and a message-oriented middleware, RabbitMQ.
						</Text>
					</CardBody>

					<CardFooter>
						<Stack direction="row">
							<SkillBadge icon={<FaPython size="1rem" />} text="Python" />
							<SkillBadge icon={<GrMysql size="1rem" />} text="MySQL" />
							<SkillBadge icon={<SiRabbitmq size="1rem" />} text="RabbitMQ" />
							<SkillBadge icon={<SiJinja size="1rem" />} text="Jinja" />
							<FaGithub />
						</Stack>
					</CardFooter>
				</Stack>
			</Card>

			<Card
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="outline"
			>
				<Image
					objectFit="cover"
					maxW={{ base: "100%", sm: "200px" }}
					src={Antbuildz}
					alt="Antbuildz"
				/>

				<Stack>
					<CardBody>
						<Heading>Antbuilz: A Bidding Platform</Heading>

						<Text py="2">
							A web app for the construction industry to rent and loan
							industrial equipment. Search for your wanted equipment and place
							your desired bids on them.
						</Text>
					</CardBody>

					<CardFooter>
						<Stack direction="row">
							<SkillBadge icon={<FaJava size="1rem" />} text="Java" />
							<SkillBadge
								icon={<SiSpringboot size="1rem" />}
								text="Springboot"
							/>
							<SkillBadge icon={<SiHibernate size="1rem" />} text="Hibernate" />
							<SkillBadge icon={<SiApachemaven size="1rem" />} text="Maven" />
							<SkillBadge icon={<SiThymeleaf size="1rem" />} text="Thymeleaf" />
							<SkillBadge icon={<GrMysql size="1rem" />} text="MySQL" />
							<FaGithub />
						</Stack>
					</CardFooter>
				</Stack>
			</Card> */}
		</Box>
	);
};

export default Projects;
