import React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../../../misc/tools";

class NavbarItem extends React.Component<
  {
    onClick?: React.MouseEventHandler<any> | undefined;
    icon: string;
    children: React.ReactNode;
  },
  HTMLElement
> {
  public render() {
    const { onClick, icon, children } = this.props;
    return (
      <li onClick={onClick}>
        <a aria-current="page">
          <i className={typeCheck(icon, "icons10-add")}></i>
          <span>{children}</span>
        </a>
      </li>
    );
  }
}

export default hot(NavbarItem);
