import {
	Feature,
	FeatureCard,
	FeatureDescription,
	FeatureTitle,
	InfiniteMovingCards,
	BackgroundPoints,
} from '@/components';
import { features, featuresNotices } from '@/constants/HomeConstant';

import { motion } from 'framer-motion';

const HomePage = () => {
	const items = [
		{
			quote:
				"The best investment we've made in years. It's not just a tool; it's a game-changer that has propelled our business forward.",
			name: 'Nathan Hill',
			title: 'Investment Analyst',
		},
		{
			quote:
				"A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making.",
			name: 'Ivy Wilson',
			title: 'Business Consultant',
		},
		{
			quote:
				'Transformative technology with real impact. It has streamlined our operations and brought unprecedented efficiency to our processes.',
			name: 'Leo Carter',
			title: 'Technology Strategist',
		},
		{
			quote:
				'The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.',
			name: 'Jack Brown',
			title: 'Performance Manager',
		},
		{
			quote:
				'A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.',
			name: 'Peter White',
			title: 'Strategic Planner',
		},
		{
			quote:
				"It has completely changed the way we operate. The AI's ability to analyze and optimize our processes is phenomenal.",
			name: 'Tina Brooks',
			title: 'Process Analyst',
		},
		{
			quote:
				"It's a game-changer for our business. The insights it provides are invaluable and have driven substantial growth for us.",
			name: 'Quinn Taylor',
			title: 'Growth Manager',
		},
		{
			quote:
				'It consistently exceeds our expectations. Its adaptability and precision make it indispensable for our daily operations.',
			name: 'Olivia Scott',
			title: 'Quality Assurance Manager',
		},
		{
			quote:
				"This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
			name: 'Alice Johnson',
			title: 'Senior Software Engineer',
		},
	];
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
					<div className="font-extralight text-base md:text-4xl text-white dark:text-neutral-200 py-4">
						And this, is chemical burn.
					</div>
					<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
						Debug now
					</button>
				</motion.div>
			</BackgroundPoints>
			<div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
				<div className="px-8">
					<h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-white dark:text-dark">
						One of our projects
					</h4>

					<p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
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
						className="relative flex flex-col gap-4 items-center justify-center px-56 py-9 rounded-lg bg-gradient-to-b from-black via-gray-900 to-gray-800 border border-gray-800">
						<div className="text-3xl md:text-7xl font-bold text-white dark:text-white text-center">
							Are you ready to join us?
						</div>
						<div className="font-extralight text-base md:text-4xl text-white dark:text-neutral-200 py-4">
							get access right now.
						</div>
						<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
							Right now
						</button>
					</motion.div>
				</div>
			</BackgroundPoints>
		</div>
	);
};

export default HomePage;
