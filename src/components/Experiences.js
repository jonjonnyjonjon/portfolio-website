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
			"Optimised user workflow for better user experience on Cookie Management Platform",
			"Developed a Chrome Extension to monitor and record network logs and cookies",
			"Documented key project procedures for setup, user and troubleshooting guides",
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
			"Developed scripts for data generation using Excel VBA and Power Query",
			"Introduced Microsoft Power Automate to improve efficiency in uploading tasks on Microsoft SharePoint",
			"Proposed and reworked on report generation process flows by using Microsoft Power Automate and Excel Macro",
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
			p={5}
		>
			<HStack align="left">
				<VStack align="left" justify="center" w="40%">
					<Image src={item.image} alt="" w="40%" />
					<Heading
						fontSize={{ base: "14px" }}
						sx={{ color: `${item.accentColor} !important` }}
					>
						{item.title}
					</Heading>
					<Text
						fontSize={{ base: "11px", md: "20px" }}
						color={item.accentColor}
					>
						{item.country}
					</Text>
					<Text
						fontSize={{ base: "11px", md: "20px" }}
						color={item.accentColor}
					>
						{item.duration}
					</Text>
				</VStack>

				<UnorderedList
					spacing={3}
					color={item.accentColor}
					w="60%"
					fontSize={{ base: "11px", md: "20px" }}
				>
					{item.description.map((item) => (
						<ListItem key={item}>{item}</ListItem>
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
		<Box
			bg={bg}
			px="50px"
			pb="1px" // else got gap
			id="experiences"
			_before={{
				content: "''",
				height: "100px",
				visibility: "hidden",
				display: "block",
			}}
		>
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
