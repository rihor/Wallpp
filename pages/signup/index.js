import React from 'react'

import Form from '../components/form'
import { Background } from '../styles'
import { Container } from './styles'

const SignUp = () => (
  <Background>
    <Container>
      <h1>Sign up</h1>
      <Form username email password />
    </Container>
  </Background>
)

export default SignUp
