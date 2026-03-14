import { motion } from "framer-motion";
import { BsFillCameraVideoFill } from "react-icons/bs";

export default function ProjectCard({ project }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			whileHover={{
				rotateY: 5,
				rotateX: -5,
				scale: 1.02,
				transition: { duration: 0.2 },
			}}
			style={{ transformStyle: "preserve-3d" }}
			className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full"
		>
			<div className="relative h-48 overflow-hidden bg-gray-100">
				<motion.img
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.4 }}
					src={project.imgSrc}
					alt={project.name}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
					{project.name}
				</h3>
				<p
					className="text-gray-600 dark:text-gray-300 text-sm mb-4"
					dangerouslySetInnerHTML={{ __html: project.synopsis }}
				/>
				<div className="flex flex-wrap gap-2 mb-4">
					{project.skills.map((skill) => (
						<span
							key={`${project.name}-${skill}`}
							className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 rounded"
						>
							{skill}
						</span>
					))}
				</div>
				{project.video && (
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-sm font-medium"
						onClick={() => window.open(project.video, "_blank")}
					>
						<BsFillCameraVideoFill />
						Watch Demo
					</motion.button>
				)}
			</div>
		</motion.div>
	);
}
