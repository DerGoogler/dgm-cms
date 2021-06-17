# DGM CMS
Static CMS

Installing:
- `npm install`
- ˋnpm run build-devˋ
- launch any `localhost`


## Add components to Markdown
```jsx
<Markdown options={{
    overrides: {
        New1: {
            component: New1,
        },
        New2: {
            component: New2,
        },
    },
}}>
    {this.state.data}
</Markdown>
```

## Usage of Custom Components
Custom Components

**HeadImg**
```jsx
<HeadImg src="url" head="Header Title" text="Content Text"/>
```

**Options**
```jsx
<Options title="Page Title" platform="android or ios"/>
```

**Cooldown**
```jsx
<Cooldown date=""/>
```