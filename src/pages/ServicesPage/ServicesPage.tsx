'use client';
import {
	CardHorizontal,
	ContentTextCardHorizontal,
	ServiceCard,
} from '@/components';
import { motion } from 'framer-motion';
import {
	cardVariants,
	newServicesThree,
	newServicesTwo,
	services,
} from '@/constants/ServicesConstant';
import { newServices } from '../../constants/ServicesConstant';

const ServicesPage = ({}) => {
	return (
		<div className="min-h-screen pt-24 pb-11 bg-white dark:bg-black">
			<div className="max-w-[90vw] lg:max-w-[70vw] mx-auto flex flex-col items-center my-10">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
					Our Services
				</h2>
				<div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 mb-11">
					{services.map((service, index) => (
						<motion.div
							key={index}
							custom={index}
							initial="hidden"
							animate="visible"
							variants={cardVariants}
							whileHover={{ scale: 1.1 }}
							transition={{ type: 'spring', stiffness: 300 }}>
							<ServiceCard
								title={service.title}
								description={service.description}
								icon={service.icon}
							/>
						</motion.div>
					))}
				</div>
				<div className="w-full flex flex-col gap-10">
					<CardHorizontal
						imagePosition="left"
						imageSrc="./services/logisticsservicesforcompanies.jpeg"
						text={
							<ContentTextCardHorizontal
								title="Logistics services for companies"
								typeService="company"
								description={
									<p>
										Discover how{' '}
										<span className="text-gray-600 font-bold">TRANSQ</span> Can
										Revolutionize Your Business As A Supplier
									</p>
								}
								titleServices="Available solutions"
								service={newServices}
							/>
						}
					/>
					<CardHorizontal
						imagePosition="right"
						imageSrc="./services/logisticsservicesforcompanies.jpeg"
						text={
							<ContentTextCardHorizontal
								title="Streamline Your Resource Management and Compliance"
								typeService="company"
								description={
									<p className="my-5">
										See how{' '}
										<span className="text-gray-600 font-bold">TRANSQ</span> Can
										Transform Your Business Operations
									</p>
								}
								titleServices="Available solutions"
								service={newServicesTwo}
							/>
						}
					/>
					<CardHorizontal
						imagePosition="left"
						imageSrc="./services/logisticsservicesforcompanies.jpeg"
						text={
							<ContentTextCardHorizontal
								title="Enhance Your Financial Management and Customer Support"
								typeService="company"
								description={
									<p className="my-5">
										Learn How{' '}
										<span className="text-gray-600 font-bold">TRANSQ</span> Can
										Revolutionize Your Business Operations
									</p>
								}
								titleServices="Available solutions"
								service={newServicesThree}
							/>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
