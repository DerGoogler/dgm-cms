import { saveAs } from "file-saver";
import chalk from "chalk";
import axios from "axios";
import config from "../config";

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
 * @returns type
 */
export function typeCheck(type: any, outer?: any) {
  if (type === undefined || type === null || type === "") {
    return outer;
  } else {
    return type;
  }
}

/**
 * Inline if satement
 * @param vaule
 * @param IF
 * @param ELSE
 * @returns
 */
export function typeIf(value: any, IF: any, ELSE: any) {
  if (value) {
    return IF;
  } else {
    return ELSE;
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
    throw new Error('The "logger()" function neds an color');
  } else {
    switch (color) {
      case "red":
        console.log(g.red(data_));
        break;
      case "yellow":
        console.log(g.yellow(data_));
        break;
      case "green":
        console.log(g.green(data_));
        break;
      case "white":
        console.log(g.white(data_));
        break;
      case "blue":
        console.log(g.blue(data_));
        break;
      case "gray":
        console.log(g.gray(data_));
        break;
      case "underline":
        console.log(g.underline(data_));
        break;
      case "greenBright":
        console.log(g.greenBright(data_));
        break;
      case "keyword":
        console.log(g.keyword(data_));
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

export function validURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

export function loadSourceFile(filename: string, filetype: string) {
  var fileref: HTMLElement | null;
  if (filetype == "js") {
    // If filename is a external JavaScript file
    if ((fileref = document.createElement("script"))) {
      fileref.setAttribute("type", "text/javascript");
      fileref.setAttribute("src", filename);
    }
  } else if (filetype == "css") {
    // If filename is an external CSS file
    if ((fileref = document.createElement("link"))) {
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", filename);
    }
  }
  // if (typeof fileref != "undefined")
  //  document.getElementsByTagName("head")[0].appendChild(fileref);
}
