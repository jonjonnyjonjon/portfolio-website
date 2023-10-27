import { BsFillCameraVideoFill } from "react-icons/bs"

export default function ProjectCard({ project }) {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
			<img className="rounded-t-lg" src={project.imgSrc} alt="Dorans Inn" />

			<div className="p-5">
				<div>
					<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">
						{project.name}
					</h5>
					{project.skills.map((skill) => (
						<span
							key={`${project.name}-${skill}`}
							className="inline-flex items-center rounded-md bg-green-50 mr-2 mb-2 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-700/10"
						>
							{skill.toUpperCase()}
						</span>
					))}
					<p
						className="mb-3 font-normal text-gray-700"
						dangerouslySetInnerHTML={{ __html: project.synopsis }}
					/>
				</div>

				{project.sponsor !== "" ? (
					<div className="mb-3 font-normal text-gray-500">
						Sponsor: {project.sponsor}
					</div>
				) : null}

				{project.video !== "" ? (
					<button
						type="button"
						className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm py-2 px-3 text-center inline-flex items-center gap-2 dark:focus:ring-[#3b5998]/55"
						onClick={() =>
							window.open(project.video, "_blank")
						}
					>
						<BsFillCameraVideoFill />
						Video
					</button>
				) : null}
			</div>
		</div>
	);
}
