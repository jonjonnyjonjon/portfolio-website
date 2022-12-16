import {
	Avatar,
	Center,
	Flex,
	Heading,
	HStack,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PixelAvatar from "../images/pixel_me.png";

const IntroContent = () => {
	return (
		<>
			<Center>
				<Avatar size={["2xl", "full"]} src={PixelAvatar} />
			</Center>
			<VStack w="40%" align="left">
				<Heading fontSize={[24, null, 64]}>Hello 👋</Heading>
				<Text w="fit-content" fontSize={[14, null, 32]}>
					I am Jonathan, living in Singapore.
				</Text>
				<Text w="fit-content" fontSize={[14, null, 32]}>
					A University student and an aspiring Software Engineer
				</Text>
			</VStack>
			<HStack>
				<FaGithub
					size={20}
					onClick={() =>
						window.open("https://www.github.com/jonjonnyjonjon", "_blank")
					}
					style={{ cursor: "pointer" }}
					fontSize="large"
				/>
				<FaLinkedin
					size={20}
					onClick={() =>
						window.open("https://www.linkedin.com/in/jonathan-htwong", "_blank")
					}
					style={{ cursor: "pointer" }}
					fontSize="large"
				/>
				<MdEmail
					size={20}
					onClick={() =>
						window.open("mailto:jonathanwong99@gmail.com", "_blank")
					}
					style={{ cursor: "pointer" }}
					fontSize="large"
				/>
			</HStack>
		</>
	);
}

const Intro = () => {
	const bg = useColorModeValue(
		"white",
		"linear-gradient(to top, #193041, #1f2332, #1d1922, #140e13, #000000);"
	);

	return (
		<Flex
			gap={5}
			align="center"
			justify="center"
			minH="calc(100vh - 60px)"
			bg={bg}
			direction={{ base: "column", md: "row" }}
		>
			<IntroContent />
		</Flex>
	);
};

export default Intro;
