import React from 'react'
import Link from 'next/link'

import Form from '../../components/Form'
import { Background, Container } from '../../styles/signPageStyle'

const SignUp = () => (
  <Background>
    <Container>
      <h1>Sign up</h1>
      <Form username email password buttonText="Sign up" />
      <Link href="/signin">
        <a>I already have an account!</a>
      </Link>
    </Container>
  </Background>
)

export default SignUp
