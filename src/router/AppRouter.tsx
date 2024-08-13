import { Footer, NavBar } from '@/components';
import {
	ContactUsPage,
	HomePage,
	OrderTrackingPage,
	ServicesPage,
} from '@/pages';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/order-tracking" element={<OrderTrackingPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/contact" element={<ContactUsPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};
