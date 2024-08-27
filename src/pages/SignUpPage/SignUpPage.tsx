'use client';
import React from 'react';

import { cn } from '@/lib/utils';
import {
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandGoogle,
} from '@tabler/icons-react';
import { BottomGradient, Input } from '@/components';
import { TbBrandApple } from 'react-icons/tb';
import { motion } from 'framer-motion';

function SignUpPage() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');
	};

	return (
		<div className="relative bg-black overflow-hidden">
			{/* Elementos geométricos en el fondo */}
			{/* <motion.div
				className="absolute w-72 h-72 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full opacity-20 top-16 left-16"
				initial={{ scale: 0 }}
				animate={{ scale: 1.1 }}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'reverse',
				}}></motion.div>
			<motion.div
				className="absolute w-72 h-72 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full opacity-20 top-16 right-16"
				initial={{ scale: 0 }}
				animate={{ scale: 1.1 }}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'reverse',
				}}></motion.div>
			<motion.div
				className="absolute w-96 h-96 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-30 bottom-16 left-16"
				initial={{ scale: 0 }}
				animate={{ scale: 1.2 }}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'reverse',
				}}></motion.div>
			<motion.div
				className="absolute w-96 h-96 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-30 bottom-16 right-16"
				initial={{ scale: 0 }}
				animate={{ scale: 1.2 }}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'reverse',
				}}></motion.div> */}

			{/* Fondo del contenido principal */}
			<div className="relative pt-24 pb-11 sm:mx-3 md:mx-0">
				<div className="relative max-w-md w-full mx-auto rounded-2xl px-4 py-8 md:p-8 shadow-input bg-gradient-to-r from-white to-gray-400 dark:bg-black">
					<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
						Welcome to TransQ
					</h2>
					<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
						Sign in so you can have more benefits
					</p>

					<form className="my-8" onSubmit={handleSubmit}>
						<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
							<div className={cn('flex flex-col space-y-2 w-full')}>
								<label
									className={cn(
										'text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
									)}
									htmlFor="firstname">
									First name
								</label>
								<Input id="firstname" placeholder="Alex" type="text" />
							</div>
							<div className={cn('flex flex-col space-y-2 w-full')}>
								<label
									className={cn(
										'text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
									)}
									htmlFor="lastname">
									Last name
								</label>
								<Input id="lastname" placeholder="Smith" type="text" />
							</div>
						</div>
						<div className={cn('flex flex-col space-y-2 w-full mb-4')}>
							<label
								className={cn(
									'text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
								)}
								htmlFor="email">
								Email Address
							</label>
							<Input id="email" placeholder="alex@correo.com" type="email" />
						</div>
						<div className={cn('flex flex-col space-y-2 w-full mb-4')}>
							<label
								className={cn(
									'text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
								)}
								htmlFor="password">
								Password
							</label>
							<Input id="password" placeholder="••••••••" type="password" />
						</div>
						<div className={cn('flex flex-col space-y-2 w-full mb-8')}>
							<label htmlFor="againpassword">Enter your password again</label>
							<Input
								className={cn(
									'text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
								)}
								id="againpassword"
								placeholder="••••••••"
								type="password"
							/>
						</div>

						<button
							className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
							type="submit">
							Sign up &rarr;
							<BottomGradient />
						</button>

						<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

						<div className="flex flex-col space-y-4">
							<button
								className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
								type="submit">
								<IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
								<span className="text-neutral-700 dark:text-neutral-300 text-sm">
									Google
								</span>
								<BottomGradient />
							</button>
							<button
								className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
								type="submit">
								<IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
								<span className="text-neutral-700 dark:text-neutral-300 text-sm">
									Facebook
								</span>
								<BottomGradient />
							</button>
							<button
								className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
								type="submit">
								<IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
								<span className="text-neutral-700 dark:text-neutral-300 text-sm">
									GitHub
								</span>
								<BottomGradient />
							</button>

							<button
								className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
								type="submit">
								<TbBrandApple className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
								<span className="text-neutral-700 dark:text-neutral-300 text-sm">
									Apple
								</span>
								<BottomGradient />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUpPage;
