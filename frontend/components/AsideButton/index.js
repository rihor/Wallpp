import React from 'react'
import Link from 'next/link'
import { MdHome } from 'react-icons/md'

import { Container } from './styles'

const AsideButton = () => (
  <Container>
    <Link href="/">
      <a>
        Home
        <MdHome />
      </a>
    </Link>
  </Container>
)

export default AsideButton
