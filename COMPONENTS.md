# COMPONENTS

All components listed are here

# `Defaults` are not needed on any component

## Options

```tsx
<Options
  title="Jimmy"
  description="Hellow World!"
  rainType="snowflakes"
  rainTypeChar="*"
  canonical="https://dergoogler.com"
  keywords="hello,world,react"
/>
```

### `Defaults`

- favicon

---

## Alert

```tsx
<Alert title="Alert" message="Alert content" />
```

### `Defaults`

- cancelable

---

## Cooldown

```tsx
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

```tsx
<Download filename="hellow.txt" content="error in line 53" />
```

### `Defaults`

- callback

---

## FakeTweet

```tsx
<FakeTweet />
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

```tsx
<Frame src="<button>Hellow</button>" />
```

---

## Click

```tsx
<Click click="alert('hellow')">
  <FakeTweet />
</Click>
```

---

## Translate (Beta)

```tsx
<Translate de="DEUTSCH!" en="English" />
```

---

## XHR

```tsx
<XHR src="https://example.com/index.txt" />
```

# HTML Dom components (Modified)

These components can normel used as normal

## Video

```tsx
<video src="/pages/videos/hellow.mp4">
```

### `Defaults`

- type
- controls
- noSupportText

---

## Audio

```tsx
<audio
    src="/pages/audios/hellow.mp3"
    type="video/mpeg"
```

### `Defaults`

- noSupportText
- controls

---
