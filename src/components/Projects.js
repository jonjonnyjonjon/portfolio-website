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
	HStack,
	Icon,
	Image,
	SimpleGrid,
	Text,
	// Stack,
	// Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
// import SkillBadge from "./SkillBadge";
import DoransInn from "../images/dorans-inn.png";
import Antbuildz from "../images/antbuildz.png";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Projects = () => {
	const bg = useColorModeValue(
		"white",
		"linear-gradient(to top, #193041, #1f2332, #1d1922, #140e13, #000000);"
	);

	return (
		<Box
			h="50vh"
			px="50px"
			bg={bg}
			id="projects"
			_before={{
				content: "''",
				height: "100px",
				visibility: "hidden",
				display: "block",
			}}
		>
			<Heading mb={5}>Projects</Heading>

			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacing="40px"
				minChildWidth="120px"
			>
				<VStack align="left">
					<Image
						minW={{ base: "100%", sm: "300px" }}
						src={DoransInn}
						alt="Doran's Inn"
						borderRadius="2xl"
					/>
					<Heading fontSize="24px">
						League of Legends e-commerce website
					</Heading>
					<HStack spacing={5} justify="space-between">
						<Text fontSize={{ base: "11px", md: "20px" }}>
							A web app that simulates the purchasing process on an e-commerce
							shopping platform. Utilizes Flask to build a microservice
							architecture and a message-oriented middleware, RabbitMQ.
						</Text>
						<Icon as={BsArrowUpRightSquare} />
					</HStack>
				</VStack>
				<VStack align="left">
					<Image
						minW={{ base: "100%", sm: "300px" }}
						src={Antbuildz}
						alt="Antbuildz"
						borderRadius="2xl"
					/>
					<Heading fontSize="24px">
						Bidding Platform for Construction Vehicles
					</Heading>
					<HStack spacing={5} justify="space-between">
						<Text fontSize={{ base: "11px", md: "20px" }}>
							A web app for the construction industry to rent and loan
							industrial equipment. Search for your wanted equipment and place
							your desired bids on them.
						</Text>
						<Icon as={BsArrowUpRightSquare} />
					</HStack>
				</VStack>
			</SimpleGrid>
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
