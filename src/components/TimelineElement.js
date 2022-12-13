import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork } from "react-icons/md";
import { HStack, Image, VStack } from "@chakra-ui/react";

const TimelineElement = ({ item }) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
			date={item.duration}
			iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
			icon={<MdWork />}
		>
			<HStack>
				<Image src="" alt="" />
				<VStack align="left">
					<h3 className="vertical-timeline-element-title">{item.title}</h3>
					<h4 className="vertical-timeline-element-subtitle">{item.country}</h4>
				</VStack>
			</HStack>
			<p>{item.description}</p>
		</VerticalTimelineElement>
	);
};

export default TimelineElement;
