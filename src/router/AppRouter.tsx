import { Footer, NavBar, ScrollToTop, ScrollUpButton } from '@/components';
import {
	ContactUsPage,
	HomePage,
	LoginPage,
	OrderTrackingPage,
	ServicesPage,
	SignUpPage,
} from '@/pages';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
	return (
		<Router>
			<ScrollUpButton />
			<ScrollToTop />
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/order-tracking" element={<OrderTrackingPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/contact" element={<ContactUsPage />} />
				<Route path="/register" element={<SignUpPage />} />
				<Route path="/Login" element={<LoginPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};
