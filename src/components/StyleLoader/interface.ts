import { HTMLAttributeReferrerPolicy, HTMLAttributes } from "react";

interface StyleLoaderInterface extends HTMLAttributes<Element> {
  as?: string | undefined;
  crossOrigin?: string | undefined;
  src?: string | undefined;
  hrefLang?: string | undefined;
  integrity?: string | undefined;
  media?: string | undefined;
  imageSrcSet?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  rel?: string | undefined;
  sizes?: string | undefined;
  type?: string | undefined;
  charSet?: string | undefined;
}

export default StyleLoaderInterface;
