import * as React from "react";

class CustomComponent<Props = {}, States = {}, SS = any> extends React.PureComponent<Props, States, SS>{
    public constructor(props: Readonly<Props> | Props) {
        super(props)
    }

    /**
     * Save the entered data to the local storage
     * @param key
     * @param value
     */
    public setCookie(key: any, value: any) {
        localStorage.setItem(key, value);
    }

    /**
     * Get the entered data from the local storage
     * @param key
     */
    public getCookie(key: string) {
        var item: any = localStorage.getItem(key);
        if (item === null || item === undefined) {
            localStorage.setItem(key, "");
            location.reload();
        } else {
            return item;
        }
    }

    /**
     * Removes the entered cookie from the local storage
     * @param key
     */
    public removeCookie(key: string) {
        localStorage.removeItem(key);
    }

    /**
     * Just ... huh idk
     * @param IF
     * @returns
     */
    public ifCheck(IF: any) {
        return IF === undefined || IF === null || IF === "";
    }
    /**
     * To call the files from the local (`/pages/home.dgm`).
     * @param param `/?/`
     * @returns
     */
    public getUrlParam(param: string) {
        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
        var regex = new RegExp("[?&]" + param + "/([^&#]*)/");
        var url = decodeURIComponent(window.location.href);
        var match = regex.exec(url);
        return match ? match[1] : "";
    }

    /**
     * Checks if an `undefined`, `null` or `""` returns.
     * @param type The data thats should checked
     * @param outer The data thats shoulds return on fail
     * @returns type
     */
    public typeCheck(type: any, outer?: any) {
        if (type === undefined || type === null || type === "") {
            return outer;
        } else {
            return type;
        }
    }

    /**
     * Inline if satement
     * @param IF
     * @param returnIFtrue
     * @param returnELSE
     * @returns
     */
    public typeIf(IF: any, returnIFtrue: any, returnELSE: any) {
        if (IF) {
            return returnIFtrue;
        } else {
            return returnELSE;
        }
    }
}

export default CustomComponent