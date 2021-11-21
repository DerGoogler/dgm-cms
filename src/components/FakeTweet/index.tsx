import * as React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../misc/tools";
import { Tweet } from "react-fake-tweet";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import "react-fake-tweet/dist/index.css";
import config from "../../config";
import FakeTweetInterface from "./interface";

class FakeTweet extends React.Component<FakeTweetInterface> {
  private element!: HTMLElement | null;

  private addDownloadText() {
    if ((this.element = document.querySelector("._NcNbB"))) {
      var para = document.createElement("P");
      para.innerHTML = "Download this Tweet";
      para.setAttribute("class", "_1WY8K download-text");
      para.style.cursor = "pointer";
      this.element.appendChild(para);
    }
  }

  public componentDidMount() {
    this.addDownloadText();
    if ((this.element = document.querySelector(".download-text"))) {
      this.element.onclick = () => {
        if (
          confirm(
            "Do you want download this Tweet? The donwload label will be removed, after the succsfull download takes it 3 seconds to reapply the download label"
          )
        ) {
          this.element?.remove();
          this.download();
        } else {
          console.log("Download has been canceled");
        }
      };
      this.element.setAttribute("title", "Download this Tweet as an image");
    }
  }

  private download() {
    if ((this.element = document.getElementById("download"))) {
      htmlToImage.toBlob(this.element).then((blob) => {
        saveAs(blob, Date.now() + ".png");
      });
      setTimeout(() => {
        this.addDownloadText();
      }, 3000);
    }
  }

  public render() {
    const {
      avatar,
      nickname,
      name,
      verified,
      text,
      app,
      date,
      retweets,
      likes,
    } = this.props;
    return (
      <>
        <Tweet
          id="download"
          className="FakeTweet--Custom"
          config={{
            user: {
              avatar: typeCheck(avatar, config.base.defaultFavicon),
              nickname: typeCheck(nickname, "Der_Googler"),
              name: typeCheck(name, "Jimmy"),
              verified: typeCheck(verified, false),
            },
            text: typeCheck(text, "This is a fake Tweet"),
            app: typeCheck(app, "Twitter for Android"),
            date: typeCheck(date, Date.now()),
            retweets: typeCheck(retweets, 5456),
            likes: typeCheck(likes, 23454),
          }}
        />
      </>
    );
  }
}

export default hot(FakeTweet);
