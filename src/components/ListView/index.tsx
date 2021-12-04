import * as React from "react";
import { hot } from "react-hot-loader/root";
import { ListItem } from "react-onsenui";
import { typeCheck } from "../../misc/tools";
import ListItemInterface from "./interface";

class ListView extends React.Component<ListItemInterface> {
  public render() {
    const {
      href,
      children,
      target,
      modifier,
      tappable,
      tapBackgroundColor,
      lockOnDrag,
      expandable,
      expanded,
    } = this.props;

    return (
      <>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (href === undefined || href === "") {
              console.log("No link");
            } else {
              window.open(href, typeCheck(target, "_blank"));
            }
          }}
          modifier={modifier}
          tappable={tappable}
          tapBackgroundColor={tapBackgroundColor}
          lockOnDrag={lockOnDrag}
          expandable={expandable}
          expanded={expanded}
        >
          {children}
        </ListItem>
      </>
    );
  }
}

export default hot(ListView);
