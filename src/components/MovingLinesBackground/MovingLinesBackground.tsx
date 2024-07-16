
import React from 'react';
import { motion } from 'framer-motion';

interface MovingLinesBackgroundProps {
	children?: React.ReactNode;
}

const MovingLinesBackground: React.FC<MovingLinesBackgroundProps> = ({
	children,
}) => {
	const numLines = 10;

	return (
		<div className="relative w-full h-screen overflow-hidden bg-black">
			{/* Líneas verticales */}
			{Array.from({ length: numLines }).map((_, index) => (
				<motion.div
					key={`vertical-${index}`}
					className="absolute bg-white"
					style={{
						width: '1px',
						height: '100%',
						left: `${index * 10}%`,
						filter: 'blur(2px)', // Aplicar desenfoque
					}}
					initial={{
						y: '-100%',
					}}
					animate={{
						y: ['-100%', '100%'],
					}}
					transition={{
						duration: 10,
						delay: index * 0.5,
						repeat: Infinity,
						repeatType: 'loop',
						ease: 'linear',
					}}
				/>
			))}

			{/* Líneas horizontales */}
			{Array.from({ length: numLines }).map((_, index) => (
				<motion.div
					key={`horizontal-${index}`}
					className="absolute bg-white"
					style={{
						width: '100%',
						height: '1px',
						top: `${index * 10}%`,
						filter: 'blur(2px)', // Aplicar desenfoque
					}}
					initial={{
						x: '-100%',
					}}
					animate={{
						x: ['-100%', '100%'],
					}}
					transition={{
						duration: 10,
						delay: index * 0.5,
						repeat: Infinity,
						repeatType: 'loop',
						ease: 'linear',
					}}
				/>
			))}

			{children}
		</div>
	);
};

export default MovingLinesBackground;
