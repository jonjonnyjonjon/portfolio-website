import React from "react";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { createRoot } from "react-dom/client";

const theme = extendTheme({
	fonts: {
		body: "'Open Sans', sans-serif",
		heading: "'Outfit', sans-serif",
	},
	config: {
		initialColorMode: "dark",
	},
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
