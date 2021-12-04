export default interface ProjectCardInterface {
	title: string | undefined;
	href?: string | undefined;
	children: React.ReactNode;
	target?: string | undefined;
	buttonText?: string | undefined;
	language?: string;
}
