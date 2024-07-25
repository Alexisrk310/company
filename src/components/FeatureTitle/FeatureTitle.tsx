const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className=" max-w-5xl mx-auto text-left tracking-tight text-white dark:text-black font-bold text-xl md:text-2xl md:leading-snug">
			{children}
		</p>
	);
};

export default FeatureTitle;
