import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import JLogo from "../images/j-logo.png";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const [darkMode, setDarkMode] = useState(false);
	const [navigation, setNavigation] = useState([
		{ name: "About Me", href: "#aboutMe", current: true },
		{ name: "Experiences", href: "#experiences", current: false },
		{ name: "Projects", href: "#projects", current: false },
		{ name: "Contact Me", href: "#contactMe", current: false },
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
		<header className="bg-white fixed top-0 w-full shadow-md z-10">
			<Disclosure as="nav" className="bg-[#DCD9D4] dark:bg-gray-800">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
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
										<img className="h-8 w-auto" src={JLogo} alt="JLogo" />
									</div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? "bg-neutral-200 text-black dark:bg-gray-900 dark:text-white"
															: "hover:bg-gray-700 hover:text-white",
														"rounded-md px-3 py-2 text-sm font-medium"
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
									className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
									id="theme-toggle"
									onClick={toggleTheme}
								>
									{document.documentElement.classList.contains("dark") ? (
										<button
											type="button"
											className="rounded-lg bg-gray-900 p-2  hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										>
											<BsFillSunFill className="h-6 w-6" aria-hidden="true" />
										</button>
									) : (
										<button
											type="button"
											className="rounded-lg bg-neutral-200 p-2  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										>
											<BsMoonFill className="h-6 w-6" aria-hidden="true" />
										</button>
									)}
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={classNames(
											item.current
												? "bg-neutral-200 text-black dark:bg-gray-900 dark:text-white"
												: "hover:bg-gray-700 hover:text-white",
											"block rounded-md px-3 py-2 text-base font-medium"
										)}
										aria-current={item.current ? "page" : undefined}
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</header>
	);
}
