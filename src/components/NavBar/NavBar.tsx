import { useState, useEffect } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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
			className={`bg-black w-[70vw] py-4 px-7 fixed top-3 left-0 right-0 mx-auto transition-all duration-300 z-50 md:rounded-full ${
				scrolled ? 'shadow-lg bg-white' : ''
			}`}>
			<div className="container mx-auto flex justify-between items-center">
				{/* Left section: Logo and Navigation */}
				<div className="flex items-center space-x-4">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`${isActive ? '' : 'pointer '} text-lg font-bold ${
								scrolled ? 'text-black' : 'text-white'
							}`
						}>
						TransQ
					</NavLink>
					<div className="hidden md:flex items-center space-x-4 ml-6">
						<NavLink
							to="/order-tracking"
							className={({ isActive }) =>
								`${isActive ? '' : 'pointer '} ${
									scrolled ? 'text-black' : 'text-white'
								}`
							}>
							Track the order
						</NavLink>
						<NavLink
							to="/services"
							className={({ isActive }) =>
								`${isActive ? '' : 'pointer '} ${
									scrolled ? 'text-black' : 'text-white'
								}`
							}>
							Services
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`${isActive ? '' : 'pointer '} ${
									scrolled ? 'text-black' : 'text-white'
								}`
							}>
							Contact
						</NavLink>
					</div>
				</div>
				{/* Right section: Icons */}
				<div className="hidden md:flex items-center space-x-4">
					<FaRegMoon className={`${scrolled ? 'text-black' : 'text-white'}`} />
					<NavLink
						to="#"
						className={({ isActive }) =>
							`${isActive ? '' : 'pointer '} ${
								scrolled ? 'text-black' : 'text-white'
							}`
						}>
						Login
					</NavLink>
					<NavLink
						to="#"
						className={({ isActive }) =>
							`${isActive ? '' : 'pointer '} ${
								scrolled ? 'text-black' : 'text-white'
							} bg-gray-700 px-3 py-1 rounded`
						}>
						Sign Up
					</NavLink>
				</div>
				{/* Mobile menu button */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className={`${
							scrolled ? 'text-black' : 'text-white'
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
								isActive ? 'hover:bg-slate-700' : 'pointer hover:bg-slate-700'
							} ${
								scrolled
									? 'text-black block py-2 px-4'
									: 'block text-white py-2 px-4'
							}`
						}>
						Track the order
					</NavLink>
					<NavLink
						to="/services"
						className={({ isActive }) =>
							`${
								isActive ? 'hover:bg-slate-700' : 'pointer hover:bg-slate-700'
							} ${
								scrolled
									? 'text-black block py-2 px-4'
									: 'block text-white py-2 px-4'
							}`
						}>
						Services
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`${
								isActive ? 'hover:bg-slate-700' : 'pointer hover:bg-slate-700'
							} ${
								scrolled
									? 'text-black block py-2 px-4 '
									: 'block text-white py-2 px-4'
							}`
						}>
						Contact
					</NavLink>
					<FaRegMoon
						className={`hover:text-slate-700 ${
							scrolled ? 'my-2 mx-4 text-black ' : 'my-2 mx-4 text-white'
						}`}
					/>
					<NavLink
						to="#"
						className={({ isActive }) =>
							`${isActive ? 'hover:bg-slate-700' : 'pointer '} ${
								scrolled
									? 'text-black block py-2 px-4'
									: 'block text-white py-2 px-4'
							}`
						}>
						Login
					</NavLink>
					<NavLink
						to="/register"
						className={({ isActive }) =>
							`${isActive ? 'hover:bg-slate-600' : 'pointer'} ${
								scrolled
									? 'text-black block py-2 px-4 bg-gray-700 rounded'
									: 'block text-white py-2 px-4 bg-gray-700 rounded'
							}`
						}>
						Sign Up
					</NavLink>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
