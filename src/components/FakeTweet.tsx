import * as React from "react";
import { hot } from "react-hot-loader/root";
import { FakeTweetInterface } from "../misc/others/d/interface";
import { typeCheck } from "../misc/others/tools";
import { Tweet } from "react-fake-tweet";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import "react-fake-tweet/dist/index.css";
import ons from "onsenui";
import { Button } from "react-onsenui";

class FakeTweet extends React.Component<FakeTweetInterface> {
  private makeDownload = React.createRef<FakeTweet>();

  private download() {
    /*
    var node = this.makeDownload.current;
    if (node) {
    }
    htmlToImage.toBlob(node).then(function (blob) {
      saveAs(blob, Date.now() + ".png");
    });*/
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
          config={{
            user: {
              avatar: typeCheck(
                avatar,
                "https://avatars.githubusercontent.com/u/54764558?v=4"
              ),
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
        {/*<Button modifier="large" onClick={this.download}>
          Download
        </Button>*/}
      </>
    );
  }
}

export default hot(FakeTweet);
