import React from 'react'
import Link from 'next/link'
import { MdAddBox } from 'react-icons/md'

import { Container, Button } from '../styles'

const Nav = () => (
  <Container>
    <div>
      <Link href="/">
        <a>
          <Button title>Wallpp</Button>
        </a>
      </Link>
      <Link href="/create">
        <a>
          <Button background>
            <MdAddBox size={20} color="#eee" />
            New post
          </Button>
        </a>
      </Link>
    </div>

    <div>
      <Link href="/signin">
        <a>
          <Button>Sign in</Button>
        </a>
      </Link>
      <Link href="/signup">
        <a>
          <Button background>Sign up</Button>
        </a>
      </Link>
    </div>
  </Container>
)

export default Nav
