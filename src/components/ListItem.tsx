import * as React from "react";
import { hot } from "react-hot-loader/root";
import { ListItem } from "react-onsenui";
import { ListItemInterface } from "../d/interface";
import { typeCheck } from "../misc/tools";

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
          onClick={() => {
            window.open(href, typeCheck(target, "_blank"));
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
