import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import AboutMe from "./sections/AboutMe";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";

const App = () => {
	return (
		<div className="bg-[#F3F2F0] text-black dark:bg-[#131316] dark:text-white">
			<Navbar />
			<Intro />
			<AboutMe />
			<Experiences />
			<Projects />
			<ContactMe />
			<Footer />
		</div>
	);
};

export default App;
