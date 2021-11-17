import * as React from "react";
import { isDesktop } from "react-device-detect";
import { hot } from "react-hot-loader/root";
import { SoruceFileLoaderInterface } from "../d/interface";
import { loadSourceFile, logger, typeCheck, typeIf } from "../misc/tools";

class SourceFileLoader extends React.Component<SoruceFileLoaderInterface> {
  public componentDidMount() {
    const { src, type } = this.props;
    if (type == "css") {
      logger("red", "An custom CSS file has been loaded!!");
    } else if (type == "js") {
      logger("red", "An custom JavaScript file has been loaded!!");
    } else {
      logger("red", "Can't get the file type.");
    }

    loadSourceFile(src, type);
  }
  public render() {
    return <></>;
  }
}

export default hot(SourceFileLoader);
