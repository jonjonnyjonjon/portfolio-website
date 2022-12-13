import {
	Avatar,
	Center,
	HStack,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PixelAvatar from "../img/pixel_me.png";

const Intro = () => {
	const bg = useColorModeValue(
		"white",
		"linear-gradient(to top, #193041, #1f2332, #1d1922, #140e13, #000000);"
	);

	return (
		<HStack align="center" justify="center" minH="calc(100vh - 60px)" bg={bg}>
			<Center>
				<Avatar size="2xl" src={PixelAvatar} />
			</Center>
			<VStack w="40%" align="left">
				<Text>Hello, 你好 👋</Text>
				<Text w="fit-content">
					I am Jonathan, an aspiring Software Engineer and a Web Developer
				</Text>
			</VStack>
			<div className="social-media-icons">
				<FaGithub
					size={40}
					onClick={() =>
						window.open("https://www.github.com/jonjonnyjonjon", "_blank")
					}
					style={{ cursor: "pointer" }}
					fontSize="large"
				/>
				<FaLinkedin
					size={40}
					onClick={() =>
						window.open("https://www.linkedin.com/in/jonathan-htwong", "_blank")
					}
					style={{ cursor: "pointer" }}
					fontSize="large"
				/>
				<MdEmail
					size={40}
					onClick={() =>
						window.open("mailto:jonathanwong99@gmail.com", "_blank")
					}
					style={{ cursor: "pointer" }}
					fontSize="large"
				/>
			</div>
		</HStack>
	);
};

export default Intro;
