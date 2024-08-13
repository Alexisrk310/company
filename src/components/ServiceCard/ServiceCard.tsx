interface PropsServiceCard {
	title: string;
	description: string;
	icon: JSX.Element;
}
const ServiceCard = ({ title, description, icon }: PropsServiceCard) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-xs min-h-52 ">
			<div className="text-3xl mb-4">{icon}</div>
			<h2 className="text-xl font-bold mb-2">{title}</h2>
			<p className="text-gray-700">{description}</p>
		</div>
	);
};

export default ServiceCard;
