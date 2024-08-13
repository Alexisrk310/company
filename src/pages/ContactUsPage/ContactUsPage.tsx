const ContactUsPage = () => {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
			<div className="max-w-lg w-full">
				<h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
				<form className="bg-gray-300 p-6 rounded-lg shadow-lg">
					<div className="mb-4">
						<label
							className="block text-black text-md font-medium mb-2"
							htmlFor="name">
							Name
						</label>
						<input
							className="w-full p-3 text-white bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
							type="text"
							id="name"
							placeholder="Your Name"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-black text-md font-medium mb-2"
							htmlFor="email">
							Email
						</label>
						<input
							className="w-full p-3 text-white bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
							type="email"
							id="email"
							placeholder="Your Email"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-black text-md font-medium mb-2"
							htmlFor="message">
							Message
						</label>
						<textarea
							className="w-full p-3 text-white bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
							id="message"
							rows={5}
							placeholder="Your Message"></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-300 transition duration-200">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactUsPage;
