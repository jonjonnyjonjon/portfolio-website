import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import AboutMe from "./sections/AboutMe";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Intro />
			<AboutMe />
			<Experiences />
			<Projects />
			<ContactMe />
			<Footer />
		</>
	);
};

export default App;
