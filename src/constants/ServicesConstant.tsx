import {
	AiOutlineCar,
	AiOutlineClockCircle,
	AiOutlineCloud,
	AiOutlineCreditCard,
	AiOutlineDatabase,
	AiOutlineEllipsis,
	AiOutlineFileText,
	AiOutlineHome,
	AiOutlineInbox,
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineSafety,
	AiOutlineSetting,
	AiOutlineStar,
	AiOutlineTool,
	AiOutlineUser,
	AiOutlineWallet,
	AiOutlineWifi,
} from 'react-icons/ai';
import {
	FaTruck,
	FaShippingFast,
	FaBox,
	FaWarehouse,
	FaShieldAlt,
	FaGlobe,
} from 'react-icons/fa';

export const services = [
	{
		title: 'Freight Transport',
		description: 'We offer safe and fast freight transport nationwide.',
		icon: <FaTruck />,
	},
	{
		title: 'Urgent Shipments',
		description:
			'Urgent shipping service with guaranteed delivery within 24 hours.',
		icon: <FaShippingFast />,
	},
	{
		title: 'Storage Solutions',
		description: 'Short and long-term storage solutions.',
		icon: <FaBox />,
	},
	{
		title: 'Warehousing',
		description:
			'Comprehensive warehousing services for efficient inventory management.',
		icon: <FaWarehouse />,
	},
	{
		title: 'Insurance Coverage',
		description:
			'Insurance options to safeguard your shipments against loss or damage.',
		icon: <FaShieldAlt />,
	},
	{
		title: 'International Shipping',
		description:
			'Reliable international shipping services to various destinations worldwide.',
		icon: <FaGlobe />,
	},
];

export const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.5,
		},
	}),
};

export const newServices = [
	{
		icon: <AiOutlineDatabase className="mr-2" />,
		title: 'Storage',
	},
	{
		icon: <AiOutlineInbox className="mr-2" />,
		title: 'Packaging',
	},
	{
		icon: <AiOutlineHome className="mr-2" />,
		title: 'Real-estate market',
	},
	{
		icon: <AiOutlineCar className="mr-2" />,
		title: 'Transport',
	},
	{
		icon: <AiOutlineTool className="mr-2" />,
		title: 'Service Logistics',
	},
	{
		icon: <AiOutlineEllipsis className="mr-2" />,
		title: 'And more!',
	},
];

export const newServicesTwo = [
	{
		icon: <AiOutlineUser className="mr-2" />,
		title: 'Human Resources',
	},
	{
		icon: <AiOutlineMail className="mr-2" />,
		title: 'Email Marketing',
	},
	{
		icon: <AiOutlineFileText className="mr-2" />,
		title: 'Document Management',
	},
	{
		icon: <AiOutlineClockCircle className="mr-2" />,
		title: 'Time Tracking',
	},
	{
		icon: <AiOutlineSafety className="mr-2" />,
		title: 'Safety Compliance',
	},
	{
		icon: <AiOutlineStar className="mr-2" />,
		title: 'Quality Assurance',
	},
];

export const newServicesThree = [
	{
		icon: <AiOutlineCloud className="mr-2" />,
		title: 'Cloud Solutions',
	},
	{
		icon: <AiOutlineWallet className="mr-2" />,
		title: 'Financial Management',
	},
	{
		icon: <AiOutlineCreditCard className="mr-2" />,
		title: 'Payment Processing',
	},
	{
		icon: <AiOutlinePhone className="mr-2" />,
		title: 'Customer Support',
	},
	{
		icon: <AiOutlineSetting className="mr-2" />,
		title: 'System Integration',
	},
	{
		icon: <AiOutlineWifi className="mr-2" />,
		title: 'Network Solutions',
	},
];