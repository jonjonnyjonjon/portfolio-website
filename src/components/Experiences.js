import { Box, Heading } from "@chakra-ui/react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";
import TikTokLogo from "../images/TikTok logo.png"
import ContinentalLogo from "../images/Continental logo.png"
import AccentureLogo from "../images/Accenture logo.png";
import SMULogo from "../images/SMU logo.png";

const items = [
	{
		image: ContinentalLogo,
		title: "Data Analyst Intern",
		country: "Singapore",
		duration: "Jun 2020 - Aug 2020",
		description: "Lorem",
		bgColor: "black",
		accentColor: "#FF9900",
	},
	{
		image: TikTokLogo,
		title: "Software Engineer Intern",
		country: "Singapore",
		duration: "May 2022 - Aug 2022",
		description: "Lorem Ipsum",
		bgColor: "black",
		accentColor: "white",
	},
	{
		image: AccentureLogo,
		title: "Software Engineer Intern",
		country: "Singapore",
		duration: "May 2022 - Aug 2022",
		description: "Lorem Ipsum",
		bgColor: "#9708FE",
		accentColor: "white",
	},
	{
		image: SMULogo,
		title: "Student",
		country: "Singapore",
		duration: "Aug 2019 - May 2023",
		description: "Lorem Ipsum",
		bgColor: "white",
		accentColor: "#0F2B72",
	},
];

const Experiences = () => {
	return (
		<Box h="fit-content" bg="gray" p={5}>
			<Heading>Experiences</Heading>
			<VerticalTimeline h="50vh">
				{items.map((item) => {
					return <TimelineElement key={item.title} item={item} />;
				})}
			</VerticalTimeline>
		</Box>
	);
};

export default Experiences;
