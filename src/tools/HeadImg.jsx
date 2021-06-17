import React, {Component} from "react";
import { hot } from "react-hot-loader/root";


class HeadImg extends Component {
    render() {
        const { src, head, text } = this.props;
        return (
            <>
                <div style={{
                    position: 'relative',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <img src={src} alt={head} style={{
                        width: '100%',
                        verticalAlign: 'middle'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        background: 'rgb(0, 0, 0)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: '#f1f1f1',
                        width: '100%',
                        padding: '20px',
                    }}>
                        <h1>{head}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </>);
    }
}


export default hot(HeadImg);