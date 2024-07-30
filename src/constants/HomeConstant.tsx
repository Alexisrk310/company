import {
	SkeletonBentoGridFour,
	SkeletonBentoGridOne,
	SkeletonBentoGridThree,
	SkeletonBentoGridTwo,
} from '@/components';

import {
	PropsFeatures,
	PropsfeaturesNotices,
} from '@/interfaces/PropsFeatures';
import {
	IconAdjustmentsBolt,
	IconCloud,
	IconCurrencyDollar,
	IconEaseInOut,
	IconHeart,
	IconHelp,
	IconRouteAltLeft,
	IconTerminal2,
} from '@tabler/icons-react';

export const features: PropsFeatures[] = [
	{
		title: 'Track issues effectively',
		description:
			'Track and manage your project issues with ease using our intuitive interface.',
		skeleton: <SkeletonBentoGridOne />,
		className:
			'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
	},
	{
		title: 'Capture pictures with AI',
		description:
			'Capture stunning photos effortlessly using our advanced AI technology.',
		skeleton: <SkeletonBentoGridTwo />,
		className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
	},
	{
		title: 'Watch our AI on YouTube',
		description:
			'Whether its you or Tyler Durden, you can get to know about our product on YouTube',
		skeleton: <SkeletonBentoGridThree />,
		className: 'col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800',
	},
	{
		title: 'Deploy in seconds',
		description:
			'With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.',
		skeleton: <SkeletonBentoGridFour />,
		className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
	},
];

export const featuresNotices: PropsfeaturesNotices[] = [
	{
		title: 'Built for developers',
		description:
			'Built for engineers, developers, dreamers, thinkers and doers.',
		icon: <IconTerminal2 />,
	},
	{
		title: 'Ease of use',
		description:
			"It's as easy as using an Apple, and as expensive as buying one.",
		icon: <IconEaseInOut />,
	},
	{
		title: 'Pricing like no other',
		description:
			'Our prices are best in the market. No cap, no lock, no credit card required.',
		icon: <IconCurrencyDollar />,
	},
	{
		title: '100% Uptime guarantee',
		description: 'We just cannot be taken down by anyone.',
		icon: <IconCloud />,
	},
	{
		title: 'Multi-tenant Architecture',
		description: 'You can simply share passwords instead of buying new seats',
		icon: <IconRouteAltLeft />,
	},
	{
		title: '24/7 Customer Support',
		description:
			'We are available a 100% of the time. Atleast our AI Agents are.',
		icon: <IconHelp />,
	},
	{
		title: 'Money back guarantee',
		description: 'If you donot like EveryAI, we will convince you to like us.',
		icon: <IconAdjustmentsBolt />,
	},
	{
		title: 'And everything else',
		description: 'I just ran out of copy ideas. Accept my sincere apologies',
		icon: <IconHeart />,
	},
];

export const items = [
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
