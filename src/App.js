// import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

// import { useEffect, useState } from "react";
// import { PacmanLoader } from "react-spinners";
import { Box } from "@chakra-ui/react";

const App = () => {
	// const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
	// const [loadingPosition, setLoadingPosition] = useState(10000);

	// useEffect(() => {
	// 	setInterval(() => {
	// 		if (fadeProp.fade === "fade-in") {
	// 			setFadeProp({ fade: "fade-out" });
	// 		}
	// 	}, 2000);
	// }, [fadeProp]);

	// let loaderWrapperStyle = {
	// 	width: "100%",
	// 	height: "100%",
	// 	position: "absolute",
	// 	top: 0,
	// 	left: 0,
	// 	backgroundColor: "black",
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	zIndex: loadingPosition,
	// 	overflow: "hidden",
	// };

	// const moveBehind = () => {
	// 	setLoadingPosition(-1);
	// };

	return (
		<Box>
			{/* <div
				className={fadeProp.fade}
				style={loaderWrapperStyle}
				onTransitionEnd={moveBehind}
			>
				<PacmanLoader color={"#FFFF00"} size={50} />
			</div> */}

			<Navbar />
			<Intro />
			<AboutMe />
			<Experiences />
			<Projects />
		</Box>
	);
};

export default App;
