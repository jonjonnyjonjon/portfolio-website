import { Box, Heading } from "@chakra-ui/react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";

const items = [
	{
		image: "Continental",
		title: "Data Analyst Intern",
		country: "Singapore",
		duration: "Jun 2020 - Aug 2020",
		description: "Lorem",
	},
	{
		image: "TiKTok",
		title: "Software Engineer Intern",
		country: "Singapore",
		duration: "May 2022 - Aug 2022",
		description: "Lorem Ipsum",
	},
	{
		image: "TiKTok",
		title: "Software Engineer Intern",
		country: "Singapore",
		duration: "May 2022 - Aug 2022",
		description: "Lorem Ipsum",
	},
	{
		image: "TiKTok",
		title: "Software Engineer Intern",
		country: "Singapore",
		duration: "May 2022 - Aug 2022",
		description: "Lorem Ipsum",
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
