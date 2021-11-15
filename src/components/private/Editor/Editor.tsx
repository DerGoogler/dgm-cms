import * as React from "react";
import { hot } from "react-hot-loader/root";
import { isAndroid, isMobile } from "react-device-detect";
import { UnControlled as CodeMirror } from "react-codemirror2";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./../../../styles/editor.markdown.css";
import "./../../../styles/github-markdown.css";
import "codemirror/mode/markdown/markdown";
import { getText } from "../../../misc/tools";
import MarkdownContent from "../../../misc/MarkdownContent";

class Editor extends React.Component {
  public state = {
    inputText: "",
    displayText: "",
  };

  public componentDidMount() {
    getText(
      "https://raw.githubusercontent.com/DerGoogler/dergoogler.github.io/master/pages/home.dgm",
      (data: string) => {
        this.setState({
          inputText: data,
          displayText: data,
        });
      }
    );
  }

  private updateText(text: any) {
    this.setState({
      inputText: text,
      displayText: text,
    });
  }

  public render() {
    const { inputText, displayText } = this.state;
    if (isAndroid || isMobile)
      return <div> Sorry this no not for your phone size </div>;
    return (
      <div>
        <header className="text-center">
          <h1 className="py-4">DG(M)arkdown Previewer</h1>
          <div className="mx-2 pb-2 mb-4">
            <p>
              Type your markdown text on the left, and see it converted and
              formatted on the right! (
              <a
                href="https://github.com/DerGoogler/dgm-cms/blob/master/COMPONENTS.md"
                target="_blank"
              >
                Components
              </a>
              )
            </p>
          </div>
        </header>
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-6">
              <CodeMirror
                value={inputText}
                options={{
                  mode: "markdown",
                  theme: "material",
                  lineNumbers: true,
                }}
                onChange={(editor, data, value) => {
                  this.updateText(value);
                }}
              />
            </div>
            <div className="col-6 output-pane">
              <MarkdownContent data={displayText} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(Editor);
