import React from 'react'
import Link from 'next/link'

import Form from '../../components/form'

import { Background, Container } from '../../styles/signPageStyle'

const SignIn = () => (
  <Background>
    <Container>
      <h1>Sign in</h1>
      <Form email password buttonText="Sign in" />
      <Link href="/signup">
        <a>I am not registered yet!</a>
      </Link>
    </Container>
  </Background>
)

export default SignIn
