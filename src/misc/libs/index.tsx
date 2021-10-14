import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { isAndroid, isMobile } from "react-device-detect";
import Editor from "../../components/private/Editor/desktop/Editor";

export function repo() {
  axios.get("https://api.github.com/repos/DerGoogler/dgm-cms").then((res) => {
    const data = res.data;
    const list = `Description: ${data.description}\nCreated at: ${data.created_at}\nUpdated at: ${data.updated_at}\nPushed at: ${data.pushed_at}\nSize: ${data.size}\nStars: ${data.stargazers_count}\nWatchers: ${data.watchers_count}\nLanguage: ${data.language}\nForks: ${data.forks}\nIssues: ${data.open_issues}\nSubscribers ${data.subscribers_count}`;
    console.log(list);
  });
}

export function openEditor() {
  const mountNode = document.getElementById("app");
  if (isMobile || isAndroid) {
    alert("Android don't have an DGM editor...");
  } else {
    if (confirm("The editor is in the beta.. Do you want open it?")) {
      ReactDOM.render(<Editor />, mountNode);
    }
  }
}
