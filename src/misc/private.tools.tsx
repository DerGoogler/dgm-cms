import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import config from "../config";
import { getUrlParam } from "./tools";

class tools {
	private globalPram: string = "";

	public getMarkdownData(callback: Function, errorNotFound?: Function) {
		if (window.location.search === "") {
			// If no search parameters
			var link: string = config.base.slug + config.base.defaultPage + config.base.file;
			axios
				.get(link)
				.then((res) => {
					const data = res.data;
					if (typeof callback == "function") {
						callback(data);
					}
				})
				.catch((error) => {
					if (error.response.status == 404) {
						if (typeof errorNotFound == "function") {
							errorNotFound(error, link);
						}
					}
				});
		} else {
			axios.get(config.base.slug + getUrlParam(this.globalPram) + config.base.file).then((res) => {
				const data = res.data;
				if (typeof callback == "function") {
					callback(data);
				}
			});
		}
	}

	public getCustomDrawerContent(callback: Function) {
		axios
			.get(
				config.base.slug +
					config.base.configPath +
					"/" +
					config.base.defaultDrawerPage +
					config.base.file
			)
			.then((res) => {
				const data = res.data;
				if (typeof callback == "function") {
					callback(data);
				}
			});
	}

	public getHeaderContent(callback: Function) {
		axios
			.get(
				config.base.slug +
					config.base.configPath +
					"/" +
					config.base.defaultHeaderFile +
					config.base.file
			)
			.then((res) => {
				const data = res.data;
				if (typeof callback == "function") {
					callback(data);
				}
			});
	}

	public getFooterContent(callback: Function) {
		axios
			.get(
				config.base.slug +
					config.base.configPath +
					"/" +
					config.base.defaultFooterFile +
					config.base.file
			)
			.then((res) => {
				const data = res.data;
				if (typeof callback == "function") {
					callback(data);
				}
			});
	}

	public clickImprovePage() {
		if (window.location.search === "") {
			window.open(
				`https://github.com/${config.base.github.gHusername}/${config.base.github.IoPage}/edit/${
					config.base.github.branch
				}/${config.base.slug.replace(/\//g, "")}/${config.base.defaultPage + config.base.file}`
			);
		} else {
			window.open(
				`https://github.com/${config.base.github.gHusername}/${config.base.github.IoPage}/edit/${
					config.base.github.branch
				}/${config.base.slug.replace(/\//g, "")}/${getUrlParam(this.globalPram) + config.base.file}`
			);
		}
	}

	public parseDGMarkdown(content: string) {
		const compile = content
			.replace(/\{#([\s\S]*?)#\}/gim, "<$1>")
			.replace(/\{#\/([\s\S]*?)#\}/gim, "</$1>")
			.replace(/\/\/\/ (.*$)/gim, "");

		return compile.trim();
	}
}

export default hot(tools);
