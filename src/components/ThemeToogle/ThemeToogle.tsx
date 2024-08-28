'use client';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToogle = ({}) => {
	const [theme, setTheme] = useState('light');
	const [scrolled, setScrolled] = useState(false);
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

	useEffect(() => {
		const systemTheme = globalThis.matchMedia?.('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light';
		const storedTheme = globalThis.localStorage?.getItem('theme');
		const initialTheme = storedTheme ? storedTheme : systemTheme;

		setTheme(initialTheme);

		if (initialTheme === 'dark') {
			globalThis.document.querySelector('html')?.classList.add('dark');
			globalThis.document.querySelector('#root')?.classList.add('bg-slate-900');
			globalThis.document.querySelector('#root')?.classList.remove('bg-white');
		} else {
			globalThis.document.querySelector('html')?.classList.remove('dark');
			globalThis.document
				.querySelector('#root')
				?.classList.remove('bg-slate-900');
			globalThis.document.querySelector('#root')?.classList.add('bg-white');
		}
	}, []);

	const handleChangeTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		globalThis.localStorage?.setItem('theme', newTheme);

		if (newTheme === 'dark') {
			globalThis.document.querySelector('html')?.classList.add('dark');
			globalThis.document.querySelector('#root')?.classList.add('bg-slate-900');
			globalThis.document.querySelector('#root')?.classList.remove('bg-white');
		} else {
			globalThis.document.querySelector('html')?.classList.remove('dark');
			globalThis.document
				.querySelector('#root')
				?.classList.remove('bg-slate-900');
			globalThis.document.querySelector('#root')?.classList.add('bg-white');
		}
	};

	return (
		<div
			onClick={handleChangeTheme}
			style={{ cursor: 'pointer' }}
			className="lg:my-5 md:my-2 my-2">
			{theme === 'light' ? (
				<FaSun size={25} color={'#ffd700'} />
			) : (
				<FaMoon size={25} color={scrolled ? '#DCDCDC' : '#FFFFFF'} />
			)}
		</div>
	);
};

export default ThemeToogle;
