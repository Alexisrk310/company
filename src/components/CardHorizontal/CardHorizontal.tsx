import { motion } from 'framer-motion';

interface PropsCardHorizontal {
	imageSrc: string;
	text: JSX.Element;
	imagePosition?: 'left' | 'right';
	imageAlt?: string;
	textColor?: string;
	borderRadius?: string;
	shadow?: string;
}

const CardHorizontal = ({
	imageSrc,
	text,
	imagePosition = 'right',
	imageAlt = 'Card Image',
	textColor = 'text-gray-700',
	borderRadius = 'rounded-lg',
	shadow = 'shadow-md',
}: PropsCardHorizontal) => {
	const cardVariants = {
		hidden: { opacity: 0, x: imagePosition === 'left' ? -50 : 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: 'easeInOut',
			},
		},
		hover: {
			scale: 1.02,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<motion.div
			className={`flex flex-col lg:flex-row bg-white ${shadow} ${borderRadius} overflow-hidden`}
			initial="hidden"
			whileInView="visible"
			whileHover="hover"
			variants={cardVariants}>
			<motion.img
				src={imageSrc}
				alt={imageAlt}
				className={`w-full h-48 lg:h-auto lg:w-1/2 object-cover ${
					imagePosition === 'left' ? 'order-1' : 'order-2'
				}`}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
			/>
			<motion.div
				className={`w-full lg:w-1/2 p-4 ${
					imagePosition === 'left' ? 'order-2' : 'order-1'
				}`}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { delay: 0.5 } }}>
				<div className={`${textColor} text-sm lg:text-base`}>{text}</div>
			</motion.div>
		</motion.div>
	);
};

export default CardHorizontal;
