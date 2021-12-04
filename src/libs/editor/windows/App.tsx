import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppTheme, NavBar, NavBarLink, NavBarSubMenu, NavPageContainer } from "react-windows-ui";
import Write from "./builders/Write";
import axios from "axios";
import { setCookie } from "../../../misc/tools";
import Preview from "./../Preview";
import NabarItem from "./builders/NabarItem";

class WindowsEditor extends React.Component {
	private alertBuilder(message: string, inputMessage: string, callback: Function) {
		var alertValue = prompt(message, inputMessage);
		if (alertValue != null) {
			if (typeof callback) {
				callback(alertValue);
			}
		}
	}

	render() {
		return (
			<Router basename={window.location.pathname}>
				<AppTheme scheme="light" />

				<NavBar title="DGMarkdown Editor" titleShort="DGM" shadowOnScroll={true}>
					<h1>Pages</h1>
					<div className="app-hr"></div>

					<NavBarLink
						to="/"
						exact={true}
						text="Preview"
						icon={<i className="icons10-grid-2"></i>}
					/>

					<NavBarLink to="/home.dgm" text="home.dgm" icon={<i className="icons10-grid-2"></i>} />

					<NavBarLink
						to="/header.dgm"
						text="header.dgm"
						icon={<i className="icons10-grid-2"></i>}
					/>
					<NavBarLink
						to="/footer.dgm"
						text="footer.dgm"
						icon={<i className="icons10-grid-2"></i>}
					/>

					<h1>Pages</h1>
					<div className="app-hr"></div>
					<NavBarSubMenu title="Tools">
						<NabarItem
							icon="icons10-add"
							onClick={() => {
								this.alertBuilder(
									"Enter a URL",
									"https://raw.githubusercontent.com/virtualvivek/react-windows-ui/main/README.md",
									(alertValue: any) => {
										axios.get(alertValue).then((res) => {
											const data = res.data;
											setCookie("DGMarkdownValueHome", data);
										});
									}
								);
							}}
						>
							Fetch from URL
						</NabarItem>
						<NabarItem
							icon="icons10-pencil"
							onClick={() => {
								this.alertBuilder("Enter a language", "markdown", (alertValue: any) => {
									// @ts-ignore
									window.monaco.editor.setModelLanguage(
										// @ts-ignore
										window.monaco.editor.getModels()[0],
										alertValue
									);
									setCookie("DMG-Editor-Language", alertValue);
								});
							}}
						>
							Change editor language
						</NabarItem>
					</NavBarSubMenu>
				</NavBar>

				<Switch>
					<Route path="/" exact>
						<NavPageContainer animateTransition>
							<Preview />
						</NavPageContainer>
					</Route>
					<Route path="/home.dgm">
						<Write key="home" cookie="DGMarkdownValueHome" />
					</Route>
					<Route path="/header.dgm">
						<Write key="header" cookie="DGMarkdownValueHeader" />
					</Route>
					<Route path="/footer.dgm">
						<Write key="footer" cookie="DGMarkdownValueFooter" />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default WindowsEditor;
