import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import JLogo from "../images/j-logo.png";
import { BsFillSunFill, BsMoonFill, BsFiletypePdf } from "react-icons/bs";
import { useState } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const [darkMode, setDarkMode] = useState(false);
	const [navigation, setNavigation] = useState([
		{ name: "About", href: "#intro", current: true },
		{ name: "Experience", href: "#experiences", current: false },
		{ name: "Projects", href: "#projects", current: false },
		{ name: "Contact", href: "#contactMe", current: false },
	]);

	function toggleTheme() {
		if (!darkMode) {
			document.documentElement.classList.add("dark");
			setDarkMode(true);
		} else {
			document.documentElement.classList.remove("dark");
			setDarkMode(false);
		}
	}

	function navClick(href) {
		const newState = navigation.map((nav) => {
			if (nav.current === true) {
				return { ...nav, current: false };
			}

			if (nav.href === href) {
				return { ...nav, current: true };
			}

			return nav;
		});

		setNavigation(newState);
	}

	return (
		<header className="relative z-50">
			<Disclosure as="nav" className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-b border-gray-200/10 dark:border-gray-700/20">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex flex-shrink-0 items-center">
										<img className="h-10 w-auto" src={JLogo} alt="JLogo" />
									</div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? "bg-gradient-to-r from-accent-500 to-accent-400 text-white px-4 py-2 rounded-lg"
															: "hover:bg-white/10 text-gray-300 hover:text-white",
														"px-3 py-2 text-sm font-medium rounded-md transition-all duration-200"
													)}
													onClick={() => navClick(item.href)}
													aria-current={item.current ? "page" : undefined}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
								<div
									className="absolute inset-y-0 right-0 flex items-center gap-4 pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
									id="theme-toggle"
								>
									<div className="flex items-center gap-4">
										<button
											type="button"
											className="flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200"
											onClick={() =>
												window.open(
													"https://drive.google.com/file/d/1KXWM9ZG6aMBTP5NQl_oRL0v0vxsiqfRv/view?usp=sharing",
													"_blank"
												)
											}
										>
											<BsFiletypePdf className="h-5 w-5" aria-hidden="true" />
											<span className="text-sm font-medium text-gray-300 dark:text-gray-400">
												Resume
											</span>
										</button>
										<button
											type="button"
											className="flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 p-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200"
											aria-label="Toggle theme"
											onClick={toggleTheme}
										>
											{document.documentElement.classList.contains("dark") ? (
												<BsFillSunFill className="h-5 w-5" aria-hidden="true" />
											) : (
												<BsMoonFill className="h-5 w-5" aria-hidden="true" />
											)}
										</button>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? "bg-accent-500 text-white"
												: "hover:bg-gray-700/50 text-gray-300",
											"block rounded-md px-3 py-2 text-base font-medium"
										)}
										onClick={() => navClick(item.href)}
									/>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</header>
	);
}
