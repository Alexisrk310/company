export interface ShippingStatusProps {
	status: 'transit' | 'delivered';
}

export interface TimelineEvent {
	label: string;
	date: string;
}
