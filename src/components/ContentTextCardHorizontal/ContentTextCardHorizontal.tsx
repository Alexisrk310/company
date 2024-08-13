'use client';

import {
	PropsContentTextCardHorizontal,
	services,
} from '@/interfaces/PropsCards';

const ContentTextCardHorizontal = ({
	title,
	typeService,
	description,
	titleServices,
	service,
}: PropsContentTextCardHorizontal) => {
	return (
		<div className="m-5 flex flex-col h-full">
			<div>
				<h2 className="text-xl sm:text-2xl font-bold text-black">{title}</h2>
				<p className="text-base sm:text-lg">Only for {typeService}</p>
				<hr className="w-24 h-1 bg-black" />
				<div className="my-5">{description}</div>
				<div className="bg-gray-300 w-full p-5 rounded-lg">
					<h2 className="font-bold">{titleServices}</h2>
					{service.map((services: services, index: number) => (
						<div key={index} className="flex items-center mb-2">
							{services.icon}
							<span className="ml-2">{services.title}</span>
						</div>
					))}
				</div>
			</div>
			<div className="mt-auto">
				<button
					className="w-full h-11 bg-slate-600 mt-5 text-white rounded-lg hover:bg-slate-700 transition-all duration-300"
					type="submit">
					PRESTAR SERVICIO
				</button>
			</div>
		</div>
	);
};

export default ContentTextCardHorizontal;
