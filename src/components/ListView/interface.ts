export default interface ListItemInterface {
  modifier?: string | undefined;
  tappable?: boolean | undefined;
  tapBackgroundColor?: string | undefined;
  lockOnDrag?: boolean | undefined;
  expandable?: boolean | undefined;
  expanded?: boolean | undefined;
  href?: string | undefined;
  target?: string | undefined;
  children: React.ReactNode;
}
