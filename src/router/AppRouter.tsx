import { NavBar } from '@/components';
import { HomePage } from '@/pages';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Router>
	);
};
