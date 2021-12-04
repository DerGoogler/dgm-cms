import * as React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../misc/tools";
import config from "./../../config";
import TitleMapperInterface from "./interface";

class TitleMapper extends React.Component<TitleMapperInterface> {
  private element!: HTMLElement | null;

  public componentDidMount() {
    const { removeTitlefromToolbar } = this.props;
    if (removeTitlefromToolbar === true) {
      if ((this.element = document.getElementById("title-toolbar"))) {
        this.element.style.color = "transparent";
      }
    }
  }

  public render() {
    const { color, bg, font } = this.props;
    return (
      <span
        style={{
          color: typeCheck(color, "#fff"),
          backgroundColor: typeCheck(bg, "transparent"),
          fontFamily: typeCheck(font, null),
        }}
      >
        {document.title.replace(config.base.afterTitle, "")}
      </span>
    );
  }
}

export default hot(TitleMapper);
