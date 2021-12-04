/**
 * https://wiki.selfhtml.org/wiki/HTML/Web_Components/custom_elements
 */
import pkg from "../../package.json";
import config from "./../config";

class CMSApp extends HTMLElement {
  public constructor() {
    super();
    this.set("version", pkg.version);
    this.style.overflow = "auto";
    this.initConfigStats([
      {
        key: "slug",
        value: config.base.slug,
      },
      {
        key: "defaultPage",
        value: config.base.defaultPage,
      },
      {
        key: "defaultDrawerPage",
        value: config.base.defaultDrawerPage,
      },
      {
        key: "defaultHeaderPage",
        value: config.base.defaultHeaderFile,
      },
      {
        key: "defaultFooterPage",
        value: config.base.defaultFooterFile,
      },
      {
        key: "configPath",
        value: config.base.configPath,
      },
      {
        key: "file",
        value: config.base.file,
      },
      {
        key: "afterTitle",
        value: config.base.afterTitle,
      },
      {
        key: "domain",
        value: config.base.domain,
      },
      {
        key: "defaultFavicon",
        value: config.base.defaultFavicon,
      },
      {
        key: "platform",
        value: config.base.platform,
      },
      {
        key: "IoPage",
        value: config.base.github.IoPage,
      },
      {
        key: "ghusername",
        value: config.base.github.gHusername,
      },
      {
        key: "branch",
        value: config.base.github.branch,
      },
    ]);
  }

  private initConfigStats(data: any) {
    return data.map((element: { key: string; value: any }) => {
      return this.set(element.key, element.value);
    });
  }

  private set(qualifiedName: string, value: string) {
    this.setAttribute(qualifiedName, value);
  }

  public connectedCallback() {
    // Element wurde ins DOM eingehängt
  }

  public disconnectedCallback() {
    // Element wurde entfernt
  }

  public adoptedCallback() {
    // Element ist in ein anderes Dokument umgezogen
  }

  public attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    // Elementparameter wurden geändert
    // Achtung attributeChangedCallback wird vor connectedCallback aufgerufen
  }
}

export default CMSApp;
