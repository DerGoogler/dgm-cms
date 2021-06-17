import * as React from 'react';
import * as ons from 'onsenui';
import { hot } from "react-hot-loader/root";

interface Props {
    date: string;
}

class Cooldown extends React.Component<Props> {
    state = {
        cooldown: ''
    }

    componentDidMount = () => {
        const { date } = this.props;
        var countDownDate = new Date(date).getTime();
        var x = setInterval(() => {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.setState({
                cooldown: days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s "
            });
            if (distance < 0) {
                clearInterval(x);
                this.setState({ cooldown: "EXPIRED" });
            }
        }, 1000);
    }

    render() {
        return (<>{this.state.cooldown}</>);
    }
}


export default hot(Cooldown);