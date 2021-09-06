import * as React             from "react";
import * as ons               from 'onsenui';
import { hot }                from "react-hot-loader/root";
import { OptionsInterface }   from '../interface';
import DocumentMeta           from 'react-document-meta'
import Cookies                from 'universal-cookie'


const cookies           =     new Cookies();
const laset             =     '/'

class Options extends React.Component<OptionsInterface> {
  componentDidMount() {
    const { title, platform } = this.props;
    document.title = title;
    cookies.set('title', title, { path: laset });
    cookies.set('platform', platform, { path: laset });
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
    cookies.set('description', description, { path: laset });
    cookies.set('canonical', canonical, { path: laset });
    cookies.set('keywords', keywords, { path: laset });
    return (<><DocumentMeta {...meta}>{this.props.children}</DocumentMeta></>);
  }
}


export default hot(Options);