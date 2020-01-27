import React from 'react'

import Form from '../../components/form'

import { Container, Background } from './styles'

const SignIn = () => (
  <Background>
    <Container>
      <h1>Sign in</h1>
      <Form email password />
    </Container>
  </Background>
)

export default SignIn
