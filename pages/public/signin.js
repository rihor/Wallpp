import React from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

import Form from '../../components/Form'
import Cookie from '../../services/cookie'
import Api from '../../services/api'

import { Layout } from '../../styles/sign'

const SignIn = () => {
  async function handleSubmit(data) {
    const { token } = await Api.post({ pathUrl: '/session', data })

    if (!token) return

    Cookie.setSession(token)

    if (!Cookie.getSession()) return

    toast.success('Login succeeded')
  }

  return (
    <Layout>
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
