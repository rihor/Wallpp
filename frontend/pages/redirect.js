import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  h1 {
    color: #2d2d2d;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
`

const Redirect = () => (
  <Container>
    <h1>Redirecting</h1>
  </Container>
)

export default Redirect
