import { saveAs } from "file-saver";
import chalk from "chalk";
import axios from "axios";

/**
 * To call the files from the local (`/pages/home.dgm`).
 * @param param `/?/`
 * @returns
 */
export function getUrlParam(param: string) {
  param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
  var regex = new RegExp("[?]" + param + "/([^&#]*)/");
  var url = decodeURIComponent(window.location.href);
  var match = regex.exec(url);
  return match ? match[1] : "";
}

/**
 * To call the user files in the **Storage Less** Service (`https://dergoogler.com/#u/DerGoogler/&p/love/`).
 * @param param `/#/`
 * @returns
 */
export function getUrlParamHash(param: string) {
  param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
  var regex = new RegExp("[#&]" + param + "/([^&#]*)/");
  var url = decodeURIComponent(window.location.href);
  var match = regex.exec(url);
  return match ? match[1] : "";
}

/**
 * Checks if an `undefined`, `null` or `""` returns.
 * @param type The data thats should checked
 * @param outer The data thats shoulds return on fail
 * @returns
 */
export function typeCheck(type: any, outer?: any) {
  if (type === undefined || type === null || type === "") {
    return outer;
  } else {
    return type;
  }
}

/**
 * Makes an downloadable file
 * @param content File content
 * @param filename File name (hello.txt)
 * @param callback Callback on download
 */
export function download(content: any, filename: string, callback?: Function) {
  if (confirm(`Do you want download ${filename}?`)) {
    var blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, filename);
    if (typeof callback == "function") {
      callback();
    }
  } else {
    alert("Download was canceled");
  }
}

/**
 * Creates an cooldown
 * @param date - Date like (Jan 5, 2022 15:37:25)
 * @param callback - Makes an callback when the cooldown is expired
 */
export function cooldown(date: string, callback: Function) {
  var countDownDate = new Date(date).getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance < 0) {
      clearInterval(x);
      if (typeof callback == "function") {
        callback(date);
      }
    }
  }, 1000);
}

/**
 *
 * @param check The function thats must be checked for an error
 * @param callback Custom callback (leave is blank, if you don't want an custom callback)
 */
export function errorReport(check: Function, callback?: Function) {
  try {
    if (typeof check == "function") {
      check();
    } else {
      throw new Error(
        'You need an callable function inside the "errorReport()" function'
      );
    }
  } catch (error) {
    if (typeof callback == "function") {
      callback();
    } else {
      if (
        confirm(
          "There was an error detected! Do you want download an error file to report this to an github issuse?"
        )
      ) {
        download(error, "pageError.console.txt");
      } else {
        alert("Download canceled");
      }
    }
  }
}

/**
 * Makes an colorable console texts
 * @param color STRING
 * @param data ANY
 */
export function logger(color: string, data: string | any) {
  const g = chalk;
  const data_ = data + " ";
  if (color === "") {
    throw new Error('The "error()" function neds an color');
  } else {
    switch (color) {
      case "red":
        g.red(data_);
        break;
      case "yellow":
        g.yellow(data_);
        break;
      case "green":
        g.green(data_);
        break;
      case "white":
        g.white(data_);
        break;
      case "blue":
        g.blue(data_);
        break;
      case "gray":
        g.gray(data_);
        break;
      case "underline":
        g.underline(data_);
        break;
      case "greenBright":
        g.greenBright(data_);
        break;
      case "keyword":
        g.keyword(data_);
        break;
    }
  }
}

/**
 * Gets an text from an xhr request
 * @param url
 * @param callback
 */
export function getText(url: string, callback?: Function) {
  axios.get(url).then((res) => {
    const data = res.data;
    if (callback == undefined) {
      return data;
    } else {
      if (typeof callback == "function") {
        callback(data);
      }
    }
  });
}
