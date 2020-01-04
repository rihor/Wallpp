import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.nav``

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  </Container>
)

export default Nav
