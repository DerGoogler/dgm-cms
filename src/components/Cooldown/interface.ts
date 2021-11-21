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

declare type Date =
  `${Months} ${number}, ${number} ${number}:${number}:${number}`;

export default interface CooldownInterface {
  date: Date;
  expiredText?: string;
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}
