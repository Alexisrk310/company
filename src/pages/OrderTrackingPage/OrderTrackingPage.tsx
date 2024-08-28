import { timelineEvents } from '@/constants/OrderTrackingContant';
import { ShippingStatusProps } from '@/interfaces/PropsOrderTracking';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrderTrackingPage: React.FC = () => {
	const [tempOrderNumber, setTempOrderNumber] = useState<string>(''); // Estado temporal para el número de seguimiento
	const [orderNumber, setOrderNumber] = useState<string>(''); // Estado para el número de seguimiento definitivo
	const [isOrderTracked, setIsOrderTracked] = useState<boolean>(false); // Estado para determinar si se ha rastreado un pedido

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (tempOrderNumber) {
			setOrderNumber(tempOrderNumber);
			setIsOrderTracked(true);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setTempOrderNumber(value);

		if (!value) {
			setOrderNumber('');
			setIsOrderTracked(false);
		}
	};

	const renderStatus = ({ status }: ShippingStatusProps) => {
		const statusClasses = {
			transit: 'bg-yellow-200 text-yellow-800',
			delivered: 'bg-green-200 text-green-800',
		};

		return (
			<span
				className={`inline-block px-2 py-1 rounded ${statusClasses[status]}`}>
				{status === 'transit' ? 'In Transit' : 'Delivered'}
			</span>
		);
	};

	return (
		<div className="bg-white dark:bg-black min-h-screen text-white">
			<div className="pt-28 pb-11">
				<motion.div
					initial={{ opacity: 0.0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="max-w-3xl mx-auto p-9 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-400 via-white to-gray-400 text-black rounded-2xl">
					<div className="space-y-6">
						<div className="text-center">
							<h1 className="text-3xl font-bold">Track Your Shipment</h1>
							<p className="text-gray-600">
								Enter your tracking number to see the status of your delivery.
							</p>
						</div>
						<form className="flex items-center gap-2" onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Enter tracking number"
								className="border p-2 rounded flex-1"
								value={tempOrderNumber}
								onChange={handleInputChange}
							/>
							<button type="submit" className="bg-black text-white p-2 rounded">
								Track
							</button>
						</form>
						{isOrderTracked && orderNumber && (
							<div className="grid gap-6">
								<div className="bg-gray-100 shadow-md rounded p-4">
									<div className="border-b pb-2 mb-2">
										<h2 className="text-xl font-bold">Shipment Status</h2>
									</div>
									<div className="grid gap-2">
										<div className="flex items-center justify-between">
											<span className="font-medium">Tracking Number:</span>
											<span>{orderNumber}</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="font-medium">Status:</span>
											{renderStatus({ status: 'transit' })}
										</div>
										<div className="flex items-center justify-between">
											<span className="font-medium">Estimated Delivery:</span>
											<span>August 10, 2024</span>
										</div>
									</div>
								</div>
								<div className="bg-gray-100 shadow-md rounded p-4">
									<div className="border-b pb-2 mb-2">
										<h2 className="text-xl font-bold">Timeline</h2>
									</div>
									<div className="timeline space-y-4">
										{timelineEvents.map((event, index) => (
											<div key={index} className="timeline-item">
												<div className="timeline-marker"></div>
												<div className="timeline-content">
													<p className="text-gray-600">{event.label}</p>
													<p className="text-gray-800">{event.date}</p>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className="bg-gray-100 shadow-md rounded p-4">
									<div className="border-b pb-2 mb-2">
										<h2 className="text-xl font-bold">Shipment Location</h2>
									</div>
									<div className="aspect-video bg-gray-200 rounded-md overflow-hidden">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.61161531747!2d-112.45468989804317!3d33.604977784465575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20Arizona%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1722881569574!5m2!1ses-419!2sco"
											className="w-full"
											width="600"
											height="450"
											style={{ border: 0 }}
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"></iframe>
										<p className="text-center py-4">
											No data available for this section.
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default OrderTrackingPage;
