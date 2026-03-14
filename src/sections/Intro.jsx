// Old image comparison slider - kept for reference
// import PixelAvatar from "../images/pixel_me.png";
// import OriginalAvatar from "../images/original_me.jpg";
// import { useEffect } from "react";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import { motion } from "framer-motion";

const Intro = () => {
	return (
		<section className="relative overflow-hidden" id="intro">
			{/* Subtle background decoration */}
			<div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
				<div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="mx-auto max-w-4xl px-6 py-32 md:py-40 text-center"
			>
				{/* Greeting */}
				<motion.p
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 font-medium"
				>
					Hello 👋
				</motion.p>

				{/* Name with gradient accent */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.7 }}
					className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
				>
					<span className="bg-gradient-to-r from-gray-900 via-accent-600 to-accent-500 bg-clip-text text-transparent dark:from-white dark:via-accent-400 dark:to-accent-300">
						Jonathan Wong
					</span>
				</motion.h1>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-semibold mb-8"
				>
					Software Engineer
				</motion.h2>

				{/* Short bio */}
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.7, duration: 0.6 }}
					className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
				>
					Building scalable systems and intuitive interfaces. Passionate about clean code, user experience, and solving complex problems.
				</motion.p>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 1.2, duration: 0.6 }}
					className="mt-16 animate-bounce"
				>
					<svg
						className="w-6 h-6 mx-auto text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Intro;
