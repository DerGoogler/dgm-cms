declare type Filename = `${string}.${string}`;

export default interface DownloadInterface {
	filename: Filename;
	content: string | any;
	callback?: Function;
}
