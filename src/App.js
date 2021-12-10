// import { Button, Container, Grid } from "@mui/material";
// import { Container } from "@mui/material";

// import { useState } from "react";
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { useEffect, useState } from "react"
import { PacmanLoader } from "react-spinners"

// const editorBoxStyle = {
// 	"border": "5px solid black",
// 	"backgroundColor": "gray",
// 	"height": "15rem"
// }

// const displayBoxStyle = {
// 	"border": "5px solid red",
// 	"backgroundColor": "gold",
// 	"height": "15rem"
// }

const App = () => {
	// const runCode = () => {
	// 	const html = document.querySelector(".editorBox").textContent
	// 	const iframe = document.querySelector(".displayBox")
	// 	iframe.src = "data:text/html;charset=utf-8," + encodeURI(html)
	// }
	const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
	const [loadingPosition, setLoadingPosition] = useState(1)

	useEffect(() => {
		setInterval(() => {
			if (fadeProp.fade === "fade-in") {
				setFadeProp({ fade: "fade-out" })
			}
		}, 2000)
	}, [fadeProp])

	let loaderWrapperStyle = {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: "black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: loadingPosition
	}

	const moveBehind = () => {
		setLoadingPosition(-1)
	}

	return (
		<div>
			<div className={fadeProp.fade} style={loaderWrapperStyle} onTransitionEnd={moveBehind}>
				<PacmanLoader color={"#FFFF00"} size={50} />
			</div>

			<Navbar />
			<Intro />
			<Skills />
			<Projects />
			{/* <Grid container spacing={2} sx={{mt: 1, mb: 1}}>
				<Grid item sm={6}>
					<div className="editorBox" contentEditable style={editorBoxStyle}>
						write your code here.
					</div>
				</Grid>
				<Grid item sm={6}>
					<iframe className="displayBox" style={displayBoxStyle} title="displayBoxContent"></iframe>
				</Grid>
			</Grid>
			<Button variant="contained" onClick={runCode}>Run</Button> */}
		</div>
	);
}

export default App