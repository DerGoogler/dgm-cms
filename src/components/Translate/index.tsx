import * as React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../misc/tools";
import TranslateInterface from "./interface";

class Translate extends React.Component<TranslateInterface> {
  public state = {
    text: "",
  };

  public componentDidMount = () => {
    const { de, en } = this.props;
    const deLang = ["de", "de-DE", "de-CH", "de-AT", "de-LU", "de-LI"];
    const enLang = [
      "en",
      "en-US",
      "en-EG",
      "en-AU",
      "en-GB",
      "en-CA",
      "en-NZ",
      "en-IE",
      "en-ZA",
      "en-JM",
      "en-BZ",
      "en-TT",
    ];
    if (enLang.indexOf(window.navigator.language) !== -1) {
      return this.setState({ text: en });
    } else {
      if (deLang.indexOf(window.navigator.language) !== -1) {
        return this.setState({ text: de });
      } else {
        return this.setState({ text: en });
      }
    }
  };

  public render() {
    return (
      <>
        {typeCheck(
          this.state.text,
          <span style={{ color: "red", fontStyle: "italic" }}>
            No Translation found
          </span>
        )}
      </>
    );
  }
}

export default hot(Translate);
