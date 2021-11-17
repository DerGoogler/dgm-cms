import axios from "axios";

export function repo() {
  axios.get("https://api.github.com/repos/DerGoogler/dgm-cms").then((res) => {
    const data = res.data;
    const list = `Description: ${data.description}\nCreated at: ${data.created_at}\nUpdated at: ${data.updated_at}\nPushed at: ${data.pushed_at}\nSize: ${data.size}\nStars: ${data.stargazers_count}\nWatchers: ${data.watchers_count}\nLanguage: ${data.language}\nForks: ${data.forks}\nIssues: ${data.open_issues}\nSubscribers ${data.subscribers_count}`;
    console.log(list);
  });
}