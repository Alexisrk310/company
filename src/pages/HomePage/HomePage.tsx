import {
	Feature,
	FeatureCard,
	FeatureDescription,
	FeatureTitle,
	InfiniteMovingCards,
	BackgroundPoints,
} from '@/components';
import { features, featuresNotices, items } from '@/constants/HomeConstant';

import { motion } from 'framer-motion';

const HomePage = () => {
	return (
		<div className="bg-black">
			<BackgroundPoints>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4 h-[100vh]">
					<div className="text-3xl md:text-7xl font-bold text-white dark:text-white text-center">
						Background lights are cool you know.
					</div>
					<div className="font-extralight text-gray-700 text-base md:text-4xl  dark:text-neutral-200 py-4">
						And this, is chemical burn.
					</div>
					<button className="bg-gray-700  dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-2">
						Debug now
					</button>
				</motion.div>
			</BackgroundPoints>
			<div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
				<div className="px-8">
					<h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-white dark:text-dark">
						One of our projects
					</h4>

					<p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-gray-500 text-center font-normal dark:text-neutral-300">
						From Image generation to video generation, Everything AI has APIs
						for literally everything. It can even create this website copy for
						you.
					</p>
				</div>

				<div className="relative ">
					<div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
						{features.map((feature) => (
							<FeatureCard key={feature.title} className={feature.className}>
								<FeatureTitle>{feature.title}</FeatureTitle>
								<FeatureDescription>{feature.description}</FeatureDescription>
								<div className=" h-full w-full">{feature.skeleton}</div>
							</FeatureCard>
						))}
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto mb-32	">
				{featuresNotices.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
			<div className="flex flex-col items-center mb-32">
				<InfiniteMovingCards
					items={items}
					direction="right"
					pauseOnHover={true}
					speed="normal"
				/>
				<InfiniteMovingCards
					items={items}
					direction="left"
					pauseOnHover={true}
					speed="normal"
				/>
				<InfiniteMovingCards
					items={items}
					direction="right"
					pauseOnHover={true}
					speed="normal"
				/>
			</div>
			<BackgroundPoints>
				<div className="flex justify-center items-center h-full">
					<motion.div
						initial={{ opacity: 0.0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.8,
							ease: 'easeInOut',
						}}
						className="relative flex flex-col gap-4 items-center justify-center p-8 sm:px-12 md:px-24 lg:px-40 xl:px-56 py-9 rounded-lg bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 border border-gray-800">
						<div className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center">
							Are you ready to join us?
						</div>
						<div className="font-extralight text-sm sm:text-base md:text-2xl lg:text-4xl text-white py-4 text-center">
							get access right now.
						</div>
						<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-2">
							Right now
						</button>
					</motion.div>
				</div>
			</BackgroundPoints>
		</div>
	);
};

export default HomePage;
