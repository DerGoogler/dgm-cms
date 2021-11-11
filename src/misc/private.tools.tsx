import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import config from "../config";
import { getUrlParam, getUrlParamHash } from "./tools";

class tools {
  public constructor() {
    console.log("Loadded");
  }

  public getMarkdownData(callback: Function) {
    axios
      .get("https://cdn.dergoogler.com/others/dgm-cms/config/bannedUser.json")
      .then((res) => {
        if (
          res.data.indexOf(
            getUrlParamHash("u").replace(/\//g, "").toLowerCase()
          ) !== -1
        ) {
          ReactDOM.render(
            <>
              <div className="cloud-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="31 111 450 290"
                >
                  <text x="120" y="320" font-size="100">
                    Error
                  </text>
                  <path d="M399.3 232.8c0-1.2.2-2.4.2-3.6 0-64.3-52.8-117.2-116.8-117.2-46.1 0-85.8 27.9-104.4 67-8.1-4.1-17.1-6.4-26.8-6.4-29.6 0-54.1 23.7-58.9 52C57.4 236.8 32 268.8 32 308.4c0 49.8 40.1 91.6 89.6 91.6H398c45 0 82-38.9 82-84.3 0-45.6-35.4-82.8-80.7-82.9zm-1.8 150.8l-3.2.4H122.4c-40.9 0-74.2-34.9-74.2-76.1 0-31.9 20.2-58.4 50.2-68.8l8.4-3 1.5-8.8c3.6-21.6 22.1-39.3 43.9-39.3 6.9 0 13.7 1.6 19.9 4.8l13.5 6.8 6.5-13.7c16.6-34.9 52.1-58.2 90.4-58.2 55.3 0 100.9 44.1 100.9 99.7 0 13.3-.2 20.3-.2 20.3l15.2.1c36.7.5 65.6 30.5 65.6 67.4 0 36.9-29.8 68.2-66.5 68.4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="31 111 450 290"
                >
                  <text x="150" y="320" font-size="100">
                    Ban
                  </text>
                  <path d="M399.3 232.8c0-1.2.2-2.4.2-3.6 0-64.3-52.8-117.2-116.8-117.2-46.1 0-85.8 27.9-104.4 67-8.1-4.1-17.1-6.4-26.8-6.4-29.6 0-54.1 23.7-58.9 52C57.4 236.8 32 268.8 32 308.4c0 49.8 40.1 91.6 89.6 91.6H398c45 0 82-38.9 82-84.3 0-45.6-35.4-82.8-80.7-82.9zm-1.8 150.8l-3.2.4H122.4c-40.9 0-74.2-34.9-74.2-76.1 0-31.9 20.2-58.4 50.2-68.8l8.4-3 1.5-8.8c3.6-21.6 22.1-39.3 43.9-39.3 6.9 0 13.7 1.6 19.9 4.8l13.5 6.8 6.5-13.7c16.6-34.9 52.1-58.2 90.4-58.2 55.3 0 100.9 44.1 100.9 99.7 0 13.3-.2 20.3-.2 20.3l15.2.1c36.7.5 65.6 30.5 65.6 67.4 0 36.9-29.8 68.2-66.5 68.4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="31 111 450 290"
                >
                  <text x="200" y="320" font-size="100">
                    :(
                  </text>
                  <path d="M399.3 232.8c0-1.2.2-2.4.2-3.6 0-64.3-52.8-117.2-116.8-117.2-46.1 0-85.8 27.9-104.4 67-8.1-4.1-17.1-6.4-26.8-6.4-29.6 0-54.1 23.7-58.9 52C57.4 236.8 32 268.8 32 308.4c0 49.8 40.1 91.6 89.6 91.6H398c45 0 82-38.9 82-84.3 0-45.6-35.4-82.8-80.7-82.9zm-1.8 150.8l-3.2.4H122.4c-40.9 0-74.2-34.9-74.2-76.1 0-31.9 20.2-58.4 50.2-68.8l8.4-3 1.5-8.8c3.6-21.6 22.1-39.3 43.9-39.3 6.9 0 13.7 1.6 19.9 4.8l13.5 6.8 6.5-13.7c16.6-34.9 52.1-58.2 90.4-58.2 55.3 0 100.9 44.1 100.9 99.7 0 13.3-.2 20.3-.2 20.3l15.2.1c36.7.5 65.6 30.5 65.6 67.4 0 36.9-29.8 68.2-66.5 68.4z" />
                </svg>
              </div>
              <div className="container">
                <div className="content">
                  <div className="heading">
                    {getUrlParamHash("u").replace(/\//g, "")} is banned
                  </div>
                  {/*<div className="sorry"></div>*/}
                </div>
              </div>
            </>,
            document.getElementById("app")
          );
        } else {
          if (window.location.hash === "") {
            if (window.location.search === "") {
              // If no search parameters
              axios
                .get(
                  config.base.slug + config.base.defaultPage + config.base.file
                )
                .then((res) => {
                  const data = res.data;
                  if (typeof callback == "function") {
                    callback(data);
                  }
                });
            } else {
              axios
                .get(config.base.slug + getUrlParam("") + config.base.file)
                .then((res) => {
                  const data = res.data;
                  if (typeof callback == "function") {
                    callback(data);
                  }
                });
            }
          } else {
            if (
              getUrlParamHash("p") === "" ||
              getUrlParamHash("p") === undefined
            ) {
              axios
                .get(
                  `https://raw.githubusercontent.com/${getUrlParamHash(
                    "u"
                  )}/dergoogler.com/${config.base.github.branch}/DGM${
                    config.base.slug
                  }${config.base.defaultPage}${config.base.file}`
                )
                .then((res) => {
                  const data = res.data;
                  if (typeof callback == "function") {
                    callback(data);
                  }
                });
            } else {
              axios
                .get(
                  `https://raw.githubusercontent.com/${getUrlParamHash(
                    "u"
                  )}/dergoogler.com/${config.base.github.branch}/DGM${
                    config.base.slug
                  }${getUrlParamHash("p")}${config.base.file}`
                )
                .then((res) => {
                  const data = res.data;
                  if (typeof callback == "function") {
                    callback(data);
                  }
                });
            }
          }
        }
      });
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

  public clickImprovePage() {
    if (window.location.hash === "") {
      if (window.location.search === "") {
        window.open(
          `https://github.com/${config.base.github.gHusername}/${
            config.base.github.IoPage
          }/edit/${config.base.github.branch}/${config.base.slug.replace(
            /\//g,
            ""
          )}/${config.base.defaultPage + config.base.file}`
        );
      } else {
        window.open(
          `https://github.com/${config.base.github.gHusername}/${
            config.base.github.IoPage
          }/edit/${config.base.github.branch}/${config.base.slug.replace(
            /\//g,
            ""
          )}/${getUrlParam("") + config.base.file}`
        );
      }
    } else {
      if (getUrlParamHash("p") === "" || getUrlParamHash("p") === undefined) {
        window.open(
          `https://github.com/${getUrlParamHash("u")}/dergoogler.com/edit/${
            config.base.github.branch
          }/DGM${config.base.slug}${getUrlParamHash("p")}${config.base.file}`
        );
      } else {
        window.open(
          `https://github.com/${getUrlParamHash("u")}/dergoogler.com/edit/${
            config.base.github.branch
          }/DGM${config.base.slug}${getUrlParamHash("p")}${config.base.file}`
        );
      }
    }
  }
}

export default hot(tools);
