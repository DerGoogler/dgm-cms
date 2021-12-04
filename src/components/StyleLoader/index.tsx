import * as React from "react";
import { hot } from "react-hot-loader/root";
import StyleLoaderInterface from "./interface";
import { typeCheck } from "../../misc/tools";

class StyleLoader extends React.Component<StyleLoaderInterface> {
  public render() {
    const {
      as,
      crossOrigin,
      src,
      hrefLang,
      integrity,
      media,
      imageSrcSet,
      referrerPolicy,
      rel,
      sizes,
      type,
      charSet,
    } = this.props;
    return (
      <>
        <link
          as={as}
          crossOrigin={crossOrigin}
          href={src}
          hrefLang={hrefLang}
          integrity={integrity}
          media={media}
          imageSrcSet={imageSrcSet}
          referrerPolicy={referrerPolicy}
          rel={typeCheck(rel, "stylesheet")}
          sizes={sizes}
          type={typeCheck(type, "text/css")}
          charSet={charSet}
        />
      </>
    );
  }
}

export default hot(StyleLoader);
