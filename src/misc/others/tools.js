export function getUrlParam(param) {
  param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
  var regex = new RegExp("[?]" + param + "/([^&#]*)/");
  var url = decodeURIComponent(window.location.href);
  var match = regex.exec(url);
  return match ? match[1] : "";
}

export function typeCheck(type, outer) {
  if (type === undefined || type === null || type === "") {
    return outer;
  } else {
    return type;
  }
}
