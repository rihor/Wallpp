import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import GlobalStyle from '../styles/global'
import { ToastContainer } from 'react-toastify'
import jwtDecode from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css'

import Cookie from '../services/cookie'
import Redirect from '../pages/redirect'

export default class MyApp extends App {
  static async getInitialProps({ ctx }) {
    const { pathname } = ctx
    const token = Cookie.getSession(ctx)

    const isTokenValid = token ? jwtDecode(token) : false

    if (
      (pathname.startsWith('/private') && !isTokenValid) ||
      (pathname.startsWith('/public') && isTokenValid)
    ) {
      return { allow: false }
    }

    return { allow: true }
  }

  componentDidMount() {
    if (!this.props.allow) {
      Router.push('/')
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <GlobalStyle />
        {this.props.allow ? <Component {...pageProps} /> : <Redirect />}
        <ToastContainer position="top-center" pauseOnHover closeOnClick />
      </div>
    )
  }
}
