export default interface AlertInterface {
	title: string;
	message: string | any;
	cancelable?: boolean;
}
