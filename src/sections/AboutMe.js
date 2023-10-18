import InfoTerminal from "../components/InfoTerminal";

const AboutMe = () => {
	return (
		<div
			className="mx-auto max-w-2xl p-12 scroll-mt-[64px] md:py-32"
			id="aboutMe"
		>
			<p className="text-3xl font-bold">About Me</p>
			<div className="flex justify-center align-center">
				<InfoTerminal />
			</div>
		</div>
	);
};

export default AboutMe;
