import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork } from "react-icons/md";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const TimelineElement = ({ item }) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{ background: item.bgColor, color: item.accentColor }}
			contentArrowStyle={{ borderRight: `7px solid ${item.bgColor}` }}
			date={item.duration}
			iconStyle={{ background: item.bgColor, color: item.accentColor }}
			icon={<MdWork />}
		>
			<HStack>
				<Image src={item.image} alt="" w="20" />
				<VStack align="left">
					<Heading sx={{color: `${item.accentColor} !important`}}>{item.title}</Heading>
					<Text>{item.country}</Text>
				</VStack>
			</HStack>
			<Text>{item.description}</Text>
		</VerticalTimelineElement>
	);
};

export default TimelineElement;
