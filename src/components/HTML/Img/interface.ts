import { HTMLAttributeReferrerPolicy } from "react";

interface ImgInterface {
	alt?: string | undefined;
	crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
	decoding?: "async" | "auto" | "sync" | undefined;
	height?: number | string | undefined;
	loading?: "eager" | "lazy" | undefined;
	referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
	sizes?: string | undefined;
	src?: string | undefined;
	srcSet?: string | undefined;
	useMap?: string | undefined;
	width?: number | string | undefined;
}

export default ImgInterface;
