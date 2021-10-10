# DGM CMS
Static CMS

## Installation
You need to have NPM installed!
- `npm install` or `npm i`
- `npm run build-dev` or `npm run build-prod`
-  launch any `localhost` or Live Server from VS Code

## Creating a page [Extended use of components](https://github.com/DerGoogler/dgm-cms/wiki/Extended-use-of-components)

The start of the page


```jsx
<Options
  title="Jimmy" // Sets the website title
  description="Auf dieser Seite findest du ein paar Infos über mich, sowie meinen Musik Geschmack!" // description for the website 
  keywords="dergoogler,DERGOOGLER,DerGoogler,der_googler,Der_Googler,DER_GOOGLER,JIMMY,jimmy,dergoogler.com,www.dergoogler.com" // keyword for the website
/>
```

----------
        
PLEASE DONT USE LIKE THIS       
it will crashs the site
      
 ```jsx
 <Options
  title={<Badge bg="primary">NEW</Badge>} // makes the error
  cardView="yes"
/>
 ```
