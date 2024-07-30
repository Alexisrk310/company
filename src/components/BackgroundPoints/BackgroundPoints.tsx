import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundPoints {
	children?: React.ReactNode;
}

const BackgroundPoints: React.FC<BackgroundPoints> = ({ children }) => {
	const numLines = 7; // Número de líneas en la cuadrícula

	return (
		<div className="relative w-full h-screen overflow-hidden bg-black bg-opacity-50">
			{/* Líneas verticales */}
			{Array.from({ length: numLines }).map((_, index) => (
				<div
					key={`vertical-${index}`}
					className={`absolute ${index >= 5 ? 'hidden md:block' : ''}`}
					style={{
						width: '1px',
						height: '100%',
						left: `${index * 16.67}%`,
						background:
							'linear-gradient(to top, rgba(128, 128, 128, 0), rgba(128, 128, 128, 0.1), rgba(128, 128, 128, 0.1), rgba(128, 128, 128, 0))',
						filter: 'blur(1px)',
					}}
				/>
			))}

			{/* Líneas horizontales */}
			{Array.from({ length: numLines - 1 }).map((_, index) => (
				<div
					key={`horizontal-${index}`}
					className={`absolute ${index >= 5 ? 'hidden md:block' : ''}`}
					style={{
						width: '100%',
						height: '1px',
						top: `${(index + 1) * 16.67}%`,
						background:
							'linear-gradient(to right, rgba(128, 128, 128, 0), rgba(128, 128, 128, 0.1), rgba(128, 128, 128, 0.1), rgba(128, 128, 128, 0))',
						filter: 'blur(1px)',
					}}
				/>
			))}

			{/* Puntos en intersecciones */}
			{Array.from({ length: numLines }).map((_, i) =>
				Array.from({ length: numLines }).map((_, j) => {
					if (i > 0 && i < numLines - 1 && j > 0 && j < numLines - 1) {
						return (
							<motion.div
								key={`point-${i}-${j}`}
								className={`absolute ${
									i >= 5 || j >= 5 ? 'hidden md:block' : ''
								}`}
								style={{
									width: '30px',
									height: '30px',
									left: `calc(${i * 16.67}% - 15px)`,
									top: `calc(${j * 16.67}% - 15px)`,
								}}
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 1, 0.5],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: 'loop',
									ease: 'easeInOut',
									delay: Math.random() * 2,
								}}>
								<div
									className="absolute bg-gray-800 bg-opacity-25 rounded-full"
									style={{
										width: '30px',
										height: '30px',
									}}
								/>
								<div
									className="absolute bg-gray-700 rounded-full"
									style={{
										width: '12px',
										height: '12px',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								/>
							</motion.div>
						);
					}
					return null;
				})
			)}

			{/* Contenido sin animaciones */}
			<div className="absolute inset-0 flex items-center justify-center z-30">
				{children}
			</div>
		</div>
	);
};

export default BackgroundPoints;
