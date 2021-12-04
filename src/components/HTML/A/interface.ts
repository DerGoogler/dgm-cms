export default interface AInterface {
	download?: any;
	href?: string | undefined;
	hrefLang?: string | undefined;
	media?: string | undefined;
	ping?: string | undefined;
	rel?: string | undefined;
	target?: string | undefined;
	type?: string | undefined;
	children: React.ReactNode | undefined;
}
