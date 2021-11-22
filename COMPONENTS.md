# COMPONENTS

All components listed are here

# `Defaults` are not needed on any component

## Options

```html
<Options
  title="Jimmy"
  description="Hellow World!"
  canonical="https://dergoogler.com"
  keywords="hello,world,react"
/>
```

### `Defaults`

- favicon

---

## Alert

```html
<Alert title="Alert" message="Alert content" />
```

### `Defaults`

- cancelable

---

## Cooldown

```html
<Cooldown date="Jan 5, 2022 15:37:25" />
```

### `Defaults`

- expiredText
- days
- hours
- minutes
- seconds

---

## Download (Beta)

```html
<Download filename="hellow.txt" content="error in line 53" />
```

### `Defaults`

- callback

---

## FakeTweet

```html
<FakeTweet />

<!-- Exprimental -->
<FakeTweet name={<font color="red">Red text</font>}/>
```

### `Defaults`

- avatar
- nickname
- name
- verified
- text
- app
- date
- retweets
- likes

---

## Frame (Beta)

```html
<frame src="<button>Hellow</button>" />
```

---

## Click

```html
<Click click="alert('hellow')">
  <FakeTweet />
</Click>
```

---

## Translate (Beta)

```html
<Translate de="DEUTSCH!" en="English" />
```

---

## XHR

```html
<XHR src="https://example.com/index.txt" />
```

---

## ProjectCard

```html
<ProjectCard title="DGM-CMS" href="https://github.com/DerGoogler/dgm-cms">
  An CMS that runs with React TS! Uses [Onsen UI](https://onsen.io/) and [React
  Bootstrap](https://react-bootstrap.github.io/)
</ProjectCard>
```

### `Defaults`

- target
- buttonText

---

## StyleLoader

```html
<StyleLoader src="..."></StyleLoader>
```

### `Defaults`

- rel

---

# HTML Dom components (Modified)

These components can normel used as normal

## Video

```html
<video src="/pages/videos/hellow.mp4"></video>
```

### `Defaults`

- type
- controls
- noSupportText

---

## Audio

```html
<audio src="/pages/audios/hellow.mp3" type="video/mpeg" />
```

### `Defaults`

- noSupportText
- controls

---

## Font

```html
<font color="red">Hello World!</font> <font color="#0078ff">Hello World!</font>
```

### `Defaults`

N/A

---

## Center

```html
<center>
  <font color="red">Hello World!</font>
</center>
```

### `Defaults`

N/A
