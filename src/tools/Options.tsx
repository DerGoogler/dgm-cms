import * as React             from "react";
import * as ons               from 'onsenui';
import { hot }                from "react-hot-loader/root";
import { OptionsInterface }   from '../interface';
import DocumentMeta           from 'react-document-meta'

class Options extends React.Component<OptionsInterface> {
  componentDidMount() {
    const { title, platform } = this.props;
    document.title = title;
    // document.getElementById('toolbar-title').innerHTML = title;
    ons.platform.select(platform);
  }

  render() {
    const { title, description, canonical, keywords } = this.props;
    const meta = {
      title: title,
      description: description,
      canonical: canonical,
      meta: {
        charset: 'utf-8',
        name: {
          // usage: react,lol,cats
          keywords: keywords
        }
      }
    };

    return (<><DocumentMeta {...meta}>{this.props.children}</DocumentMeta></>);
  }
}


export default hot(Options);