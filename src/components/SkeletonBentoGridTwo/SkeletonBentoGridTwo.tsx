import { motion } from 'framer-motion';

const SkeletonBentoGridTwo = () => {
	const images = [
		'services/shipmentTracking-one.jpeg',
		'services/shipmentTracking-two.jpeg',
		'services/shipmentTracking-three.jpeg',
		'services/shipmentTracking-four.jpeg',
		'services/shipmentTracking-five.jpeg',
		'services/shipmentTracking-six.jpeg',
	];

	const imageVariants = {
		whileHover: {
			scale: 1.1,
			rotate: 0,
			zIndex: 100,
		},
		whileTap: {
			scale: 1.1,
			rotate: 0,
			zIndex: 100,
		},
	};

	return (
		<div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
			<div className="flex flex-wrap justify-center">
				{images.map((image, idx) => (
					<motion.div
						key={idx}
						variants={imageVariants}
						whileHover="whileHover"
						whileTap="whileTap"
						style={{
							rotate: Math.random() * 20 - 10,
						}}
						className="rounded-xl m-2 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden">
						<img
							src={image}
							alt={`image ${idx}`}
							width="500"
							height="500"
							className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
						/>
					</motion.div>
				))}
			</div>
			<div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
			<div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
		</div>
	);
};

export default SkeletonBentoGridTwo;
