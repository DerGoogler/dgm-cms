import * as React from "react";
import {
    Page,
    Toolbar,
    Card
} from "react-onsenui";
import axios from 'axios';
import config from './config';
import { hot } from "react-hot-loader/root";

class Load extends React.Component {
    state = {
        tree: ''
    }

    componentDidMount() {
        const content = (data: any) => { this.setState({ tree: data }) }
        axios
            .get('https://api.github.com/repos/DerGoogler/dergoogler.github.io/contents/pages')
            .then(res => {
                content(res.data)
            });
    }

    render() {
        return (
            <>{this.state.tree}</>
        )
    }
}

class Storage extends React.Component {
    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Storage</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <Card>
                    <Load />
                </Card>
            </Page>
        );
    }
}


export default hot(Storage);