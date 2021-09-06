import Cookies              from'universal-cookie'
const cookies           =   new Cookies()
const location          =   '/'
const navigator_        =   '/'
var   userAgent         =   navigator.userAgent
var   language          =   navigator.language
var   webdriver         =   navigator.webdriver
var   cookieEnabled     =   navigator.cookieEnabled
var   geoloacation      =   navigator.geolocation
var   hash              =   window.location.hash
var   host              =   window.location.host
var   href              =   window.location.href
var   origin            =   window.location.origin
var   protocol          =   window.location.protocol
var   search            =   window.location.search
var   pathname          =   window.location.pathname
var   port              =   window.location.port

const cookiesInit = () => {
    cookies.set('userAgent',        userAgent,      { path: navigator_ })
    cookies.set('webdriver',        language,       { path: navigator_ })
    cookies.set('webdriver',        webdriver,      { path: navigator_ })
    cookies.set('cookieEnabled',    cookieEnabled,  { path: navigator_ })
    cookies.set('geolocation',      geoloacation,   { path: navigator_ })


    cookies.set('hash',             hash,           { path: location })
    cookies.set('host',             host,           { path: location })
    cookies.set('href',             href,           { path: location })
    cookies.set('origin',           origin,         { path: location })
    cookies.set('protocol',         protocol,       { path: location })
    cookies.set('search',           search,         { path: location })
    cookies.set('pathname',         pathname,       { path: location })
    cookies.set('port',             port,           { path: location })
}

export default cookiesInit()