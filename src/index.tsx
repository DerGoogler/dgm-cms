import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ons from "onsenui";
import App from "./App";
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './misc/github-markdown.css';
import cookiesInit from './misc/cookiesInit';


cookiesInit

// Build App
ons.ready(function () {
    var mountNode = document.getElementById("app");
    ReactDOM.render(<App />, mountNode);
});