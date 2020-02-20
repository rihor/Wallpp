import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    try {
      const page = renderPage(App => props =>
        sheet.collectStyles(<App {...props} />)
      )

      const styleTags = sheet.getStyleElement()

      return { ...page, styleTags }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html>
        <title>Wallpp</title>
        <Head>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Heebo|Open+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
