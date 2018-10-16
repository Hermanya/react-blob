import React, { Component } from 'react'

import {Blob} from 'react-blob'

const codeExample = `import * as React from 'react'
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
  />`

export default class App extends Component {
  render () {
    return (
      <div className="overflow-hidden position-relative">
      <div className="small-container px-3 px-md-0 mx-auto py-5">
        <div className="d-flex align-items-center justify-content-center">
          <Blob size="5em"
              style={{fontSize: '2.5em'}}
              className="bg-secondary text-white"
            >
              react-blob
            </Blob>
            <a href="https://github.com/hermanya/react-blob">
              <Blob size="2em"
                  className="bg-dark text-white"
              >
                <i className="fab fa-github"></i>
              </Blob>
            </a>
          </div>
        <section className="mb-4 text-center animated bounceInUp delay-01s">
            <h1 className="display-4 text-muted">React component that looks like <strong>liquid in space</strong></h1>
        </section>
        <div className="row">
          <section className="col animated bounceInUp delay-02s">
            <h2 className="mb-4">Install</h2>
            <pre className="bg-dark text-success p-3 rounded"><code>npm install --save react-blob</code></pre>
            <a href="https://www.npmjs.com/package/react-blob">
              <img src="https://img.shields.io/npm/v/react-blob.svg" alt="npm version" className="mr-2"/>
            </a>
            <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="code style"/>
            <div className='d-flex align-items-center mt-2'>
              MIT ©
              <a href="https://hermanya.github.io" className="ml-1">Herman Starikov</a>
              <Blob size="2em"
                className='d-inline-block ml-2'
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1589206/profile/profile-512.jpg"
              />
            </div>
          </section>
          <section className="col animated bounceInUp delay-03s">
            <h2 className="mb-4">Usage</h2>
            <pre className="bg-dark text-success p-3 rounded"><code>{codeExample}</code></pre>
          </section>
        </div>
      </div>
      <Blob size="100vh"
            style={{
                position: 'absolute',
                top: '-15%',
                right: '-15%',
                zIndex: -1,
                backgroundColor: '#21D4FD',
                color: 'white',
                opacity: 0.15,
                fontSize: '50vh'
              }}
            >
              <i className="fab fa-react"></i>
            </Blob>
      </div>
    )
  }
}
