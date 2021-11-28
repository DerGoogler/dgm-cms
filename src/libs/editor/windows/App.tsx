import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AppTheme,
  NavBar,
  NavBarLink,
  NavPageContainer,
} from "react-windows-ui";
import Write from "./builders/Write";
import Preview from "./../Preview";

class Windows extends React.Component {
  render() {
    return (
      <Router basename={window.location.pathname}>
        <AppTheme scheme="light" />

        <NavBar
          title="DGMarkdown Editor"
          //mobileHasIcons={true}
          shadowOnScroll={true}
        >
          <h1>Pages</h1>
          <div className="app-hr"></div>

          <NavBarLink
            to="/"
            exact={true}
            text="Preview"
            icon={<i className="icons10-grid-2"></i>}
          />

          <NavBarLink
            to="/home.dgm"
            text="home.dgm"
            icon={<i className="icons10-grid-2"></i>}
          />

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

export default Windows;
