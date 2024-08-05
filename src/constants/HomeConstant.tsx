import {
	SkeletonBentoGridFour,
	SkeletonBentoGridOne,
	SkeletonBentoGridThree,
	SkeletonBentoGridTwo,
} from '@/components';

import {
	PropsServicesCompany,
	PropsfeaturesNotices,
} from '@/interfaces/PropsFeatures';
import {
	FaPlane,
	FaTruck,
	FaTag,
	FaShieldAlt,
	FaBoxOpen,
} from 'react-icons/fa';
import {
	MdAccessTime,
	MdOutlineLocalShipping,
	MdOutlinePayment,
} from 'react-icons/md';

export const servicesCompany: PropsServicesCompany[] = [
	{
		title: 'Express Shipping',
		description:
			'Fast delivery services that ensure packages reach their destination in a short time, often within 1-2 business days.',
		skeleton: <SkeletonBentoGridOne />,
		className:
			'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
	},
	{
		title: 'Shipment Tracking',
		description:
			'Tools and technologies that enable customers to track the progress of their shipments in real time from pickup to final delivery.',
		skeleton: <SkeletonBentoGridTwo />,
		className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
	},
	{
		title: 'Customs Management',
		description:
			'Services that help manage documentation and customs clearance requirements for international shipments, ensuring compliance with local regulations.',
		skeleton: <SkeletonBentoGridThree />,
		className: 'col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800',
	},
	{
		title: 'Shipping Insurance',
		description:
			'Insurance options to protect shipments against loss, damage or theft during transit.',
		skeleton: <SkeletonBentoGridFour />,
		className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
	},
];

export const featuresNotices: PropsfeaturesNotices[] = [
	{
		title: 'Express Shipping',
		description:
			'Fast and secure delivery within 1-2 days for urgent shipments.',
		icon: <FaPlane />,
	},
	{
		title: 'Real-Time Tracking',
		description: 'Track your shipments in real-time from pick-up to delivery.',
		icon: <MdOutlineLocalShipping />,
	},
	{
		title: 'Customs Management',
		description:
			'Simplified customs processes for hassle-free international shipping.',
		icon: <MdOutlinePayment />,
	},
	{
		title: 'Shipping Insurance',
		description:
			'Protect your packages with coverage against loss, damage, or theft.',
		icon: <FaShieldAlt />,
	},
	{
		title: 'Competitive Pricing',
		description: 'Affordable rates with no hidden fees or extra charges.',
		icon: <FaTag />,
	},
	{
		title: '24/7 Customer Support',
		description:
			'Our support team is available around the clock to assist you.',
		icon: <MdAccessTime />,
	},
	{
		title: 'Package Pickup',
		description: 'Convenient pickup services from your location.',
		icon: <FaBoxOpen />,
	},
	{
		title: 'Flexible Delivery Options',
		description:
			'Choose from a variety of delivery options to suit your needs.',
		icon: <FaTruck />,
	},
];

export const movingCardsOne = [
	{
		quote:
			'Our package arrived ahead of schedule and in perfect condition. The service was top-notch and exceeded our expectations.',
		name: 'Emily Roberts',
		title: 'Marketing Manager',
	},
	{
		quote:
			"I've used many shipping companies, but this one stands out for its reliability and speed. Highly recommended!",
		name: 'James Anderson',
		title: 'E-commerce Entrepreneur',
	},
	{
		quote:
			'The real-time tracking feature was incredibly helpful. I was able to see exactly where my shipment was at all times.',
		name: 'Sophia Martinez',
		title: 'Graphic Designer',
	},
	{
		quote:
			'Excellent customer service and hassle-free delivery. My international package arrived without any issues.',
		name: 'Michael Lee',
		title: 'Business Owner',
	},
	{
		quote:
			'Affordable rates and fast delivery! I am very impressed with how smoothly everything went.',
		name: 'Olivia Brown',
		title: 'Freelancer',
	},
	{
		quote:
			'The entire process from pickup to delivery was seamless. I will definitely use this service again for future shipments.',
		name: 'Daniel Harris',
		title: 'Consultant',
	},
	{
		quote:
			'Great service overall. My package arrived in perfect condition and much quicker than expected.',
		name: 'Ava Wilson',
		title: 'Retail Manager',
	},
	{
		quote:
			'I’m really impressed with the attention to detail and care taken in handling my package. Highly satisfied!',
		name: 'Liam Thompson',
		title: 'IT Specialist',
	},
];

export const movingCardsTwo = [
	{
		quote:
			'Our package arrived ahead of schedule and in perfect condition. The service was top-notch and exceeded our expectations.',
		name: 'Emily Roberts',
		title: 'Marketing Manager',
	},
	{
		quote:
			"I've used many shipping companies, but this one stands out for its reliability and speed. Highly recommended!",
		name: 'James Anderson',
		title: 'E-commerce Entrepreneur',
	},
	{
		quote:
			'The real-time tracking feature was incredibly helpful. I was able to see exactly where my shipment was at all times.',
		name: 'Sophia Martinez',
		title: 'Graphic Designer',
	},
	{
		quote:
			'Excellent customer service and hassle-free delivery. My international package arrived without any issues.',
		name: 'Michael Lee',
		title: 'Business Owner',
	},
	{
		quote:
			'Affordable rates and fast delivery! I am very impressed with how smoothly everything went.',
		name: 'Olivia Brown',
		title: 'Freelancer',
	},
	{
		quote:
			'The entire process from pickup to delivery was seamless. I will definitely use this service again for future shipments.',
		name: 'Daniel Harris',
		title: 'Consultant',
	},
	{
		quote:
			'Great service overall. My package arrived in perfect condition and much quicker than expected.',
		name: 'Ava Wilson',
		title: 'Retail Manager',
	},
	{
		quote:
			'I’m really impressed with the attention to detail and care taken in handling my package. Highly satisfied!',
		name: 'Liam Thompson',
		title: 'IT Specialist',
	},
];

export const movingCardsThree = [
	{
		quote:
			'Our package arrived ahead of schedule and in perfect condition. The service was top-notch and exceeded our expectations.',
		name: 'Emily Roberts',
		title: 'Marketing Manager',
	},
	{
		quote:
			"I've used many shipping companies, but this one stands out for its reliability and speed. Highly recommended!",
		name: 'James Anderson',
		title: 'E-commerce Entrepreneur',
	},
	{
		quote:
			'The real-time tracking feature was incredibly helpful. I was able to see exactly where my shipment was at all times.',
		name: 'Sophia Martinez',
		title: 'Graphic Designer',
	},
	{
		quote:
			'Excellent customer service and hassle-free delivery. My international package arrived without any issues.',
		name: 'Michael Lee',
		title: 'Business Owner',
	},
	{
		quote:
			'Affordable rates and fast delivery! I am very impressed with how smoothly everything went.',
		name: 'Olivia Brown',
		title: 'Freelancer',
	},
	{
		quote:
			'The entire process from pickup to delivery was seamless. I will definitely use this service again for future shipments.',
		name: 'Daniel Harris',
		title: 'Consultant',
	},
	{
		quote:
			'Great service overall. My package arrived in perfect condition and much quicker than expected.',
		name: 'Ava Wilson',
		title: 'Retail Manager',
	},
	{
		quote:
			'I’m really impressed with the attention to detail and care taken in handling my package. Highly satisfied!',
		name: 'Liam Thompson',
		title: 'IT Specialist',
	},
];
