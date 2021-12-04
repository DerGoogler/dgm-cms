export declare type Months =
	| "Jan"
	| "Feb"
	| "Mar"
	| "Apr"
	| "May"
	| "Jun"
	| "Jul"
	| "Aug"
	| "Sep"
	| "Oct"
	| "Nov"
	| "Dec";

declare type Date = `${Months} ${number}, ${number} ${number}:${number}:${number}`;

interface CooldownInterface {
	date: Date;
	expiredText?: string | JSX.Element;
	days?: string | JSX.Element;
	hours?: string | JSX.Element;
	minutes?: string | JSX.Element;
	seconds?: string | JSX.Element;
}

export default CooldownInterface;
