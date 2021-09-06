import * as React             from "react";
import * as ons               from 'onsenui';
import { hot }                from "react-hot-loader/root";
import { AlertInterface }     from '../interface';

class Alert extends React.Component<AlertInterface> {
  onClick() {}

  render() {
    // You can edit more in!
    const { title, message, cancelable } = this.props;
    return (<><p style={{color: '#0076FF'}} onClick={()=> {
      ons.notification.confirm({
        message: message,
        title: title,
        buttonLabels: ['Ok'],
        animation: 'default',
        primaryButtonIndex: 0,
        cancelable: cancelable,
      })
    }}>{this.props.children} <em>(Alert)</em></p></>);
  }
}


export default hot(Alert);