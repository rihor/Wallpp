import React from 'react'
import App from 'next/app'
import GlobalStyle from '../styles/global'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    )
  }
}
