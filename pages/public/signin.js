import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import Form from '../../components/Form'
import Cookie from '../../services/cookie'
import Api from '../../services/api'

import AsideButton from '../../components/AsideButton'
import { Layout } from '../../styles/sign'

const SignIn = () => {
  async function handleSubmit(data) {
    const { token, user } = await Api.post({ pathUrl: '/session', data })

    if (!token) return
    Cookie.setSession(token)
    Cookie.setUser(user)

    if (!Cookie.getSession()) return
    Router.push('/')
  }

  return (
    <Layout>
      <AsideButton />

      <div>
        <h1>Sign in</h1>
        <Form email password buttonText="Sign in" onSubmit={handleSubmit} />
        <Link href="/signup">
          <a>I am not registered yet!</a>
        </Link>
      </div>
    </Layout>
  )
}

export default SignIn
