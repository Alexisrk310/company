import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeToogle } from '../ThemeToogle';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleScroll = () => {
		const offset = globalThis.scrollY;
		if (offset > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		globalThis.addEventListener('scroll', handleScroll);
		return () => {
			globalThis.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`w-[70vw] py-4 sm:py-4 md:py-2 px-7 md:px-5 fixed top-3 left-0 right-0 mx-auto transition-all duration-300 z-50 md:rounded-full ${
				scrolled ? 'shadow-lg bg-black dark:bg-white' : 'bg-white dark:bg-black'
			}`}>
			<div className="container mx-auto flex justify-between items-center">
				{/* Left section: Logo and Navigation */}
				<div className="flex items-center space-x-4">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`${isActive ? '' : 'pointer '} text-lg font-bold ${
								scrolled
									? 'text-white dark:text-black'
									: 'text-black dark:text-white'
							}`
						}>
						TransQ
					</NavLink>
					<div className="hidden md:flex items-center space-x-4 ml-6">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`${
									isActive ? 'text-slate-900 dark:text-slate-500' : 'pointer'
								} ${
									scrolled
										? ' text-white dark:text-black'
										: 'text-black dark:text-white'
								}`
							}>
							Home
						</NavLink>
						<NavLink
							to="/order-tracking"
							className={({ isActive }) =>
								`${
									isActive ? 'text-slate-900 dark:text-slate-500' : 'pointer'
								} ${
									scrolled
										? ' text-white dark:text-black'
										: 'text-black dark:text-white'
								}`
							}>
							Track
						</NavLink>
						<NavLink
							to="/services"
							className={({ isActive }) =>
								`${
									isActive ? 'text-slate-900 dark:text-slate-500' : 'pointer'
								} ${
									scrolled
										? ' text-white dark:text-black'
										: 'text-black dark:text-white'
								}`
							}>
							Services
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`${
									isActive ? 'text-slate-900 dark:text-slate-500' : 'pointer'
								} ${
									scrolled
										? ' text-white dark:text-black'
										: 'text-black dark:text-white'
								}`
							}>
							Contact
						</NavLink>
					</div>
				</div>
				{/* Right section: Icons */}
				<div className="hidden md:flex items-center space-x-4">
					<ThemeToogle />
					<NavLink
						to="/login"
						className={({ isActive }) =>
							`${isActive ? 'text-slate-900 dark:text-slate-500' : 'pointer '}${
								scrolled
									? ' text-white dark:text-black'
									: 'text-black dark:text-white'
							}`
						}>
						Login
					</NavLink>
					<NavLink
						to="/register"
						className={({ isActive }) =>
							`${isActive ? 'text-slate-900 dark:text-slate-500' : 'pointer'} ${
								scrolled
									? ' text-white dark:text-white'
									: 'text-black dark:text-white'
							} bg-gray-700 px-3 py-1 rounded font-bold`
						}>
						Sign Up
					</NavLink>
				</div>
				{/* Mobile menu button */}
				<div className="flex md:hidden">
					<ThemeToogle />
					<button
						onClick={toggleMenu}
						className={`${
							scrolled
								? 'text-white dark:text-black'
								: 'text-black dark:text-white'
						} focus:outline-none`}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"></path>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden mt-2">
					<NavLink
						to="/order-tracking"
						className={({ isActive }) =>
							`${
								isActive
									? 'hover:bg-slate-400 dark:hover:bg-slate-700'
									: 'pointer hover:bg-slate-400 dark:hover:bg-slate-700'
							} ${
								scrolled
									? 'text-white dark:text-black block py-2 px-4'
									: 'block text-black dark:text-white py-2 px-4'
							}`
						}>
						Track
					</NavLink>
					<NavLink
						to="/services"
						className={({ isActive }) =>
							`${
								isActive
									? 'hover:bg-slate-400 dark:hover:bg-slate-700'
									: 'pointer hover:bg-slate-400 dark:hover:bg-slate-700'
							} ${
								scrolled
									? 'text-white dark:text-black block py-2 px-4'
									: 'block text-black dark:text-white py-2 px-4'
							}`
						}>
						Services
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`${
								isActive
									? 'hover:bg-slate-400 dark:hover:bg-slate-700'
									: 'pointer hover:bg-slate-400 dark:hover:bg-slate-700'
							} ${
								scrolled
									? 'text-white dark:text-black block py-2 px-4'
									: 'block text-black dark:text-white py-2 px-4'
							}`
						}>
						Contact
					</NavLink>

					<NavLink
						to="/login"
						className={({ isActive }) =>
							`${
								isActive
									? 'hover:bg-slate-400 dark:hover:bg-slate-700'
									: 'pointer hover:bg-slate-400 dark:hover:bg-slate-700'
							} ${
								scrolled
									? 'text-white dark:text-black block py-2 px-4'
									: 'block text-black dark:text-white py-2 px-4'
							}`
						}>
						Login
					</NavLink>
					<NavLink
						to="/register"
						className={({ isActive }) =>
							`${
								isActive
									? 'hover:bg-slate-400 dark:hover:bg-slate-700'
									: 'pointer hover:bg-slate-400 dark:hover:bg-slate-700'
							} ${
								scrolled
									? 'text-white dark:text-white block py-2 px-4'
									: 'block text-black dark:text-white py-2 px-4'
							} font-bold bg-gray-700`
						}>
						Sign Up
					</NavLink>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
