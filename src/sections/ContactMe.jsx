import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function ContactMe() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="mx-auto max-w-4xl px-6 py-20 md:py-32 scroll-mt-[64px]"
			id="contactMe"
		>
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-12 text-center"
			>
				Let's <span className="text-accent-500">Connect</span>
			</motion.h2>

			<div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-lg text-gray-600 dark:text-gray-300 mb-8"
				>
					I'm currently open to new opportunities and collaborations.
					Whether you have a question or just want to say hi, feel free
					to reach out!
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="grid grid-cols-2 md:grid-cols-3 gap-4"
				>
					<motion.a
						href="https://github.com/jonjonnyjonjon"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05, y: -5 }}
						whileTap={{ scale: 0.95 }}
						className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-gray-900 text-white shadow-lg hover:shadow-xl transition-shadow"
					>
						<FaGithub className="text-2xl" />
						<span className="text-sm font-medium">GitHub</span>
					</motion.a>

					<motion.a
						href="https://www.linkedin.com/in/jonathan-htwong"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05, y: -5 }}
						whileTap={{ scale: 0.95 }}
						className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow"
					>
						<FaLinkedin className="text-2xl" />
						<span className="text-sm font-medium">LinkedIn</span>
					</motion.a>

					<motion.a
						href="mailto:jonathanwong99@gmail.com"
						whileHover={{ scale: 1.05, y: -5 }}
						whileTap={{ scale: 0.95 }}
						className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-red-500 text-white shadow-lg hover:shadow-xl transition-shadow"
					>
						<FaEnvelope className="text-2xl" />
						<span className="text-sm font-medium">Email</span>
					</motion.a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
				>
					<a
						href="https://drive.google.com/file/d/1KXWM9ZG6aMBTP5NQl_oRL0v0vxsiqfRv/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 font-medium"
					>
						<FaFilePdf className="text-xl" />
						Download Résumé
					</a>
				</motion.div>
			</div>
		</motion.div>
	);
}
