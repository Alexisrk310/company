const Footer = () => {
	return (
		<footer className="bg-gray-900 text-center lg:text-left text-white">
			<div className="flex items-center justify-center border-b-2 border-gray-800 p-6 dark:border-white/10 lg:justify-between">
				<div className="me-12 hidden lg:block">
					<span>Get connected with us on social networks:</span>
				</div>
				<div className="flex justify-center">
					<a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 320 512">
							<path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
						</svg>
					</a>
					<a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 512 512">
							<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
						</svg>
					</a>
					<a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 488 512">
							<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
						</svg>
					</a>
					<a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 448 512">
							<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
						</svg>
					</a>
					<a href="#!" className="[&>svg]:h-4 [&>svg]:w-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 448 512">
							<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
						</svg>
					</a>
				</div>
			</div>

			<div className="mx-6 py-10 text-center md:text-left">
				<div className="flex justify-around gap-8 flex-wrap">
					<div>
						<h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
							<span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor">
									<path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.532 9-5.532-8.622-5.03zM3.075 8.75L12 14.475l8.925-5.725L12 3.3 3.075 8.75zm17.25 2.738l-8.775 5.65-8.775-5.65v9.7a.75.75 0 00.38.652l8.54 5.17a.75.75 0 00.75 0l8.54-5.17a.75.75 0 00.38-.652v-9.7z" />
								</svg>
							</span>
							About Us
						</h6>
						<ul className="list-unstyled">
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									About
								</a>
							</li>
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									Our Services
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
							<span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor">
									<path d="M3.75 3A.75.75 0 003 3.75v16.5A.75.75 0 003.75 21h16.5a.75.75 0 00.75-.75V3.75A.75.75 0 0020.25 3h-16.5zM12 15.75a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0112 15.75zM18 8.625a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM6 8.625a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0z" />
								</svg>
							</span>
							Help
						</h6>
						<ul className="list-unstyled">
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									FAQ
								</a>
							</li>
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									Support
								</a>
							</li>
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
							<span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor">
									<path d="M5 12a7 7 0 014-6.32A7 7 0 0112 2a7 7 0 010 14 7 7 0 01-4-6.32A7 7 0 015 12zm11.258-2.758a.75.75 0 00-1.061 1.061A6.962 6.962 0 0014 12a6.962 6.962 0 00-1.68 1.697.75.75 0 00-1.061-1.061C11.14 11.09 12 10.043 12 8.75c0-1.293-.85-2.34-2.066-2.711a.75.75 0 00-.947.517A5.996 5.996 0 017 12a5.996 5.996 0 00-1.114-4.444.75.75 0 00-.947-.517C3.85 6.41 3 7.457 3 8.75c0 2.337 1.073 4.423 2.758 5.742A.75.75 0 005 13.5c-1.261-.826-2.272-2.006-2.67-3.75a.75.75 0 00-1.5.262c.5 2.25 1.61 4.211 3.215 5.699a7.001 7.001 0 0011.258-5.758z" />
								</svg>
							</span>
							Legal
						</h6>
						<ul className="list-unstyled">
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
							<span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor">
									<path d="M6 21v-7h4v7h6v-7h4v7a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
								</svg>
							</span>
							Contact
						</h6>
						<ul className="list-unstyled">
							<li>
								<a
									href="#!"
									className="text-surface/75 hover:text-surface/100 dark:text-white/75 dark:hover:text-white">
									Email Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-gray-800 p-6 text-center">
				© 2024
				<a className="text-surface/75 hover:text-surface/100" href="#!">
					TransQ
				</a>
				. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
