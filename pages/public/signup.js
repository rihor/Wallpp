import React from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

import Api from '../../services/api'
import Form from '../../components/Form'
import { Layout } from '../../styles/sign'

const SignUp = () => {
  async function handleSubmit(data) {
    const user = await Api.post({ pathUrl: '/users', data })

    if (!user) return

    toast.success(`User "${user.username}" registered with success!`)
  }

  return (
    <Layout>
      <div>
        <h1>Sign up</h1>
        <Form
          username
          email
          password
          passwordConfirmation
          onSubmit={handleSubmit}
          buttonText="Sign up"
        />
        <Link href="/signin">
          <a>I already have an account!</a>
        </Link>
      </div>
    </Layout>
  )
}

export default SignUp
