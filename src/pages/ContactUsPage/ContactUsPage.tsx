import { motion } from 'framer-motion';
const ContactUsPage = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-black text-white flex items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute w-96 h-96 rounded-xl bg-gradient-to-br from-gray-400 via-white to-gray-400 dark:bg-gradient-to-r  dark:from-white  dark:to-gray-400 animate-pulse  top-40 left-20 z-0 transform rotate-45 hidden md:hidden lg:block animate-fall"></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute w-96 h-96 rounded-xl bg-gradient-to-br from-gray-400 via-white to-gray-400 dark:bg-gradient-to-r  dark:from-white  dark:to-gray-400 animate-pulse  bottom-8 right-20 transform rotate-12 hidden md:hidden lg:block animate-fall"></motion.div>
			<motion.div
				initial={{ opacity: 0.0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className="max-w-lg w-full">
				<h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
				<form className=" dark:bg-gradient-to-r bg-gradient-to-br from-gray-400 via-white to-gray-400 dark:from-white  dark:to-gray-400 p-6 rounded-lg shadow-lg relative z-20">
					<div className="mb-4">
						<label
							className="block text-black text-md font-medium mb-2"
							htmlFor="name">
							Name
						</label>
						<input
							className="w-full p-3 text-white bg-gray-400 dark:bg-black placeholder:text-white dark:placeholder:text-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
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
							className="w-full p-3 text-white bg-gray-400 dark:bg-black placeholder:text-white dark:placeholder:text-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
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
							className="w-full p-3 text-white bg-gray-400 dark:bg-black placeholder:text-white dark:placeholder:text-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
							id="message"
							rows={5}
							placeholder="Your Message"></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-black hover:text-white transition duration-200">
						Send Message
					</button>
				</form>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="w-60 h-60 absolute  dark:bg-gradient-to-r bg-gradient-to-br from-gray-400 via-white to-gray-400 dark:from-white  dark:to-gray-400 animate-pulse rounded-full top-40 right-60 hidden md:hidden lg:block"></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="w-60 h-60 absolute  dark:bg-gradient-to-r bg-gradient-to-br from-gray-400 via-white to-gray-400 dark:from-white  dark:to-gray-400 animate-pulse  rounded-full bottom-8 left-60 transform rotate-45 hidden md:hidden lg:block"></motion.div>
		</div>
	);
};

export default ContactUsPage;
