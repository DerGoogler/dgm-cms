declare type BooleanString = "0" | "1";
declare type Repo = `${string}/${string}`;
declare type Mapping = "url" | "title" | "og:title" | "specific" | "number" | "pathname";
declare type Theme =
	| "light"
	| "dark"
	| "dark_dimmed"
	| "dark_high_contrast"
	| "preferred_color_scheme"
	| "transparent_dark"
	| `https://${string}`;

export default interface Props {
	repo: Repo;
	repoId: string;
	category?: string;
	categoryId?: string;
	mapping: Mapping;
	term?: string;
	theme?: Theme;
	reactionsEnabled?: BooleanString;
	emitMetadata?: BooleanString;
}
