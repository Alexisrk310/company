import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (globalThis.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		globalThis.addEventListener('scroll', toggleVisibility);

		return () => {
			globalThis.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		globalThis.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div
			className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${
				!isVisible && 'hidden'
			}`}>
			<div onClick={scrollToTop}>
				<button className="p-3 bg-gradient-to-r from-gray-400 to-gray-600 text-gray-900 rounded-full shadow-lg hover:from-gray-500 hover:to-gray-700 hover:text-white focus:outline-none">
					<FaArrowUp size={20} />
				</button>
			</div>
		</div>
	);
};

export default ScrollUpButton;
