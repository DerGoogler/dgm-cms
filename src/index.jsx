import React from "react";
import ReactDOM from "react-dom";
import ons from "onsenui";
import App from "./App";
import Cookies from 'universal-cookie';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './misc/github-markdown.css';

const cookies = new Cookies();


// Build App
ons.ready(function () {
    var mountNode = document.getElementById("app");
    ReactDOM.render(<App />, mountNode);
});