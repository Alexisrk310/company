'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		title: string;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	const [start, setStart] = useState(false);

	useEffect(() => {
		addAnimation();
	}, []);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			const directionValue = direction === 'left' ? 'forwards' : 'reverse';
			containerRef.current.style.setProperty(
				'--animation-direction',
				directionValue
			);
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			const duration =
				speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s';
			containerRef.current.style.setProperty('--animation-duration', duration);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto scroller overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]',
				className
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					'flex min-w-full gap-4 py-4 w-max flex-nowrap',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}>
				{items.map((item) => (
					<li
						className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 dark:from-white dark:to-gray-400 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 dark:border-gray-400 px-8 py-6"
						key={item.name}>
						<blockquote>
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
							<span className="relative z-20 text-sm leading-[1.6] text-white dark:text-black font-normal">
								{item.quote}
							</span>
							<div className="relative z-20 mt-6 flex flex-row items-center">
								<span className="flex flex-col gap-1">
									<span className="text-sm leading-[1.6] text-gray-200 dark:text-gray-600 font-bold">
										{item.name}
									</span>
									<span className="text-sm leading-[1.6] text-gray-400 dark:text-gray-500 font-semibold">
										{item.title}
									</span>
								</span>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InfiniteMovingCards;
