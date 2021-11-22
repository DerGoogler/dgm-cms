# DGM CMS

Static CMS that's supports better Markdown

Join the Telegram [channel](https://t.me/dergoogler) for news.

- [Changelog](https://github.com/DerGoogler/dgm-cms/blob/master/CHANGELOG.md)

## Installation

You need to have NPM installed!

- `npm install` or `npm i`
- `npm run build-dev` or `npm run build-prod`
- launch any `localhost` or Live Server from VS Code

## Use with out Build

Put these scripts on the html file bottom

```html
<div id="app"></div>
<script src="https://cdn.dergoogler.com/others/dgm-cms/index.bundle.js"></script>
<script src="https://cdn.dergoogler.com/others/dgm-cms/shared.bundle.js"></script>
```

# Page

View the [components](https://github.com/DerGoogler/dgm-cms/blob/master/COMPONENTS.md)

### How to make a custom theme?

- Go to https://onsen.io/theme-roller/?customize
- Make your theme and download
- Embed your custom file to the `header.dgm`

```html
<StyleLoader src="onsen-css-components.css" />
```

# Create Page with `<Options/>`

The start of the page

See [home.dgm](https://github.com/DerGoogler/dgm-cms/blob/master/pages/home.dgm) as a example

```jsx
<Options
  title="Jimmy" // Sets the website title
  description="Auf dieser Seite findest du ein paar Infos über mich, sowie meinen Musik Geschmack!" // description for the website
  keywords="dergoogler,DERGOOGLER,DerGoogler,der_googler,Der_Googler,DER_GOOGLER,JIMMY,jimmy,dergoogler.com,www.dergoogler.com" // keyword for the website
/>
```

---

# Editor

The new editor makes the testings and buildings easy!

### Features

- Basic Markdown code highlighing
- All custom components from DGM-CMS
- Header and Footer editor
- `<StyleLoader />` works also in the header editor
- Working `<font>` and `<center>` on newst methods!
- VS-Code based

View the editor [here!](https://dergoogler.com/editor/)
