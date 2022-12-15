import {
	Box,
	Heading,
	HStack,
	Image,
	ListItem,
	Text,
	UnorderedList,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
// import { VerticalTimeline } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import TimelineElement from "./TimelineElement";
import TikTokLogo from "../images/TikTok logo.png";
import ContinentalLogo from "../images/Continental logo.png";
import AccentureLogo from "../images/Accenture logo.png";
import SMULogo from "../images/SMU logo.png";
import { motion } from "framer-motion";

const items = [
	{
		image: AccentureLogo,
		title: "Software Engineer Intern",
		country: "Singapore",
		duration: "Jan 2023 - Apr 2023",
		description: ["Coming soon!"],
		bgColor: "#9708FE",
		accentColor: "white",
	},
	{
		image: SMULogo,
		title: "Student",
		country: "Singapore",
		duration: "Aug 2019 - May 2023",
		description: [
			"Major in Business Analytics and Digital Cloud Solutions",
			"Attained certificates such as AWS Cloud Practitioner and AWS Solutions Architect",
		],
		bgColor: "white",
		accentColor: "#0F2B72",
	},
	{
		image: TikTokLogo,
		title: "Software Engineer Intern",
		country: "Singapore",
		duration: "May 2022 - Aug 2022",
		description: [
			"Optimised the user workflow on Cookie Management Platform by making several UI changes and fixing bugs, improving the usability and user experience of the application",
			"Developed a Chrome Extension to monitor and record network logs and cookies, allowing developers to analyse network data of pages and ensure privacy compliance",
			"Initiated and documented key workflow procedures for project setup, user and troubleshooting guides in projects, allowing for a more efficient handover process for newcomers",
		],
		bgColor: "black",
		accentColor: "white",
	},
	{
		image: ContinentalLogo,
		title: "Data Analyst Intern",
		country: "Singapore",
		duration: "Jun 2020 - Aug 2020",
		description: [
			"Developed scripts for data generation using Excel VBA and Power Query to reduce processing time by 40%",
			"Introduced Microsoft Power Automate to improve efficiency in uploading tasks on Microsoft SharePoint",
			"Proposed and reworked on report generation process flows by using Microsoft Power Automate and Excel Macro to reduce manual processing by more than 50%",
		],
		bgColor: "#FF9900",
		accentColor: "black",
	},
];

const cardVariants = {
	offscreen: {
		opacity: 0,
		x: -50,
	},
	onscreen: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.6,
		},
	},
};

function ExpCard({ item }) {
	return (
		<Box
			as={motion.div}
			bg={item.bgColor}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
			variants={cardVariants}
			mb={10}
			borderRadius="lg"
			p={10}
		>
			<HStack align="left">
				<VStack align="left" justify="center" w="40%">
					<Image src={item.image} alt="" w="20%" />
					<Heading sx={{ color: `${item.accentColor} !important` }}>
						{item.title}
					</Heading>
					<Text color={item.accentColor}>{item.country}</Text>
					<Text color={item.accentColor}>{item.duration}</Text>
				</VStack>

				<UnorderedList spacing={3} color={item.accentColor} w="60%">
					{item.description.map((item) => (
						<ListItem>{item}</ListItem>
					))}
				</UnorderedList>
			</HStack>
		</Box>
	);
}

const Experiences = () => {
	const bg = useColorModeValue(
		"white",
		"linear-gradient(to bottom, #193041, #1f2332, #1d1922, #140e13, #000000);"
	);
	return (
		<Box h="fit-content" bg={bg} py="50px" px="100px">
			<Heading mb={5}>Experiences</Heading>
			{/* <VerticalTimeline h="50vh">
				{items.map((item) => {
					return (
						<TimelineElement key={item.title + item.duration} item={item} />
					);
				})}
			</VerticalTimeline> */}

			{items.map((item) => (
				<ExpCard key={item.name + item.duration} item={item} />
			))}

		</Box>
	);
};

export default Experiences;
