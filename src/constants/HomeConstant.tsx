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
