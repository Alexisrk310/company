import { useState, useEffect } from 'react';
import { FaRegMoon } from 'react-icons/fa';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
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
					<a
						href="#"
						className={`text-lg font-bold ${
							scrolled ? 'text-black' : 'text-white'
						}`}>
						TransQ
					</a>
					<div className="hidden md:flex items-center space-x-4 ml-6">
						<a href="#" className={`${scrolled ? 'text-black' : 'text-white'}`}>
							Shipments
						</a>
						<a href="#" className={`${scrolled ? 'text-black' : 'text-white'}`}>
							Services
						</a>
						<a href="#" className={`${scrolled ? 'text-black' : 'text-white'}`}>
							Contact
						</a>
					</div>
				</div>
				{/* Right section: Icons */}
				<div className="hidden md:flex items-center space-x-4">
					<FaRegMoon className={`${scrolled ? 'text-black' : 'text-white'}`} />
					<a href="#" className={`${scrolled ? 'text-black' : 'text-white'}`}>
						Login
					</a>
					<a
						href="#"
						className={`${
							scrolled ? 'text-black' : 'text-white'
						} bg-gray-700 px-3 py-1 rounded`}>
						Sign Up
					</a>
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
					<a
						href="#"
						className={`${
							scrolled
								? 'text-black block  py-2 px-4'
								: ' block text-white py-2 px-4'
						}`}>
						Pricing
					</a>
					<a
						href="#"
						className={`${
							scrolled
								? 'text-black block  py-2 px-4'
								: ' block text-white py-2 px-4'
						}`}>
						Blog
					</a>
					<a
						href="#"
						className={`${
							scrolled
								? 'text-black block  py-2 px-4'
								: ' block text-white py-2 px-4'
						}`}>
						Contact
					</a>
					<FaRegMoon
						className={`${
							scrolled ? 'my-2 mx-4 text-black ' : 'my-2 mx-4 text-white'
						}`}
					/>
					<a
						href="#"
						className={`${
							scrolled
								? 'text-black block  py-2 px-4'
								: ' block text-white py-2 px-4'
						}`}>
						Login
					</a>
					<a
						href="#"
						className={`${
							scrolled
								? 'text-black block  py-2 px-4 bg-gray-700 rounded'
								: ' block text-white py-2 px-4 bg-gray-700 rounded'
						}`}>
						Sign Up
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
