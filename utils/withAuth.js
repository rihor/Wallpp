// A HOC for protected pages
import React, { Component } from 'react'
import Router from 'next/router'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'

export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true
      }
    }

    componentDidMount() {
      try {
        const token = Cookie.get('TOKEN')
        const isLoggedIn = jwtDecode(token)

        if (!isLoggedIn) {
          Router.push('/')
        }
      } catch (err) {
        Router.push('/')
        // this.props.url.replaceTo('http://localhost:3000/')
      }

      this.setState({ isLoading: false })
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? <div /> : <AuthComponent {...this.props} />}
        </div>
      )
    }
  }
}
