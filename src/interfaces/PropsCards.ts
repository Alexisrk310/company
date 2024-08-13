export interface PropsContentTextCardHorizontal {
	title: string;
	typeService: string;
	description: JSX.Element;
	titleServices: string;
	service: services[];
}
export interface services {
	icon: JSX.Element;
	title: string;
}
