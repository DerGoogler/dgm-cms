import * as React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../misc/tools";
import CooldownInterface from "./interface";

class Cooldown extends React.Component<CooldownInterface> {
  public state = {
    cooldown: "",
  };

  public componentDidMount = () => {
    const { date, expiredText, days, hours, minutes, seconds } = this.props;
    var countDownDate = new Date(date).getTime();
    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var _days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var _hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var _minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var _seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({
        cooldown:
          _days +
          typeCheck(days, "d") +
          " " +
          _hours +
          typeCheck(hours, "h") +
          " " +
          _minutes +
          typeCheck(minutes, "m") +
          " " +
          _seconds +
          typeCheck(seconds, "s") +
          " ",
      });
      if (distance < 0) {
        clearInterval(x);
        this.setState({ cooldown: typeCheck(expiredText, "EXPIRED") });
      }
    }, 1000);
  };

  public render() {
    return <>{this.state.cooldown}</>;
  }
}

export default hot(Cooldown);
