![screenshot](https://user-images.githubusercontent.com/2906365/47053390-adfc2b80-d17a-11e8-8c85-48a1ea1ce4d3.gif)

# react-blob

> React component that looks like liquid in space

[![NPM](https://img.shields.io/npm/v/react-blob.svg)](https://www.npmjs.com/package/react-blob) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Demo](https://hermanya.github.io/react-blob/)

## Install

```bash
npm install --save react-blob
```

## Usage

```tsx
import { Blob } from 'react-blob'

const Avatar = ({src, alt}) =>
  <Blob size="100px" src={src} alt={alt}/>

const FunnyLinkButton = ({href, ...props}) =>
  <a href={href}><Blob size="2em" {...props}/></a>

const BackgroundBlob = ({style, props}) =>
  <Blob size="100vh"
    style={{
        position: 'absolute',
        top: '-15%',
        right: '-15%',
        zIndex: -1,
        backgroundColor: '#21D4FD',
        color: 'white',
        opacity: 0.05,
        fontSize: '50vh',
        ...style
    }}
    {...props}
  />
```

## License

MIT © [Hermanya](https://hermanya.github.io/)
