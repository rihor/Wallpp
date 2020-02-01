import React from 'react'
import Link from 'next/link'
import { MdAddBox } from 'react-icons/md'

import { Header } from './styles'

const Nav = () => (
  <Header>
    <div>
      <Link href="/">
        <a>
          <button>Wallpp</button>
        </a>
      </Link>
      <Link href="/wallpaper/create">
        <a>
          <button>
            <MdAddBox size={20} color="#eee" />
            New post
          </button>
        </a>
      </Link>
    </div>

    <div>
      <Link href="/signin">
        <a>
          <button>Sign in</button>
        </a>
      </Link>
      <Link href="/signup">
        <a>
          <button>Sign up</button>
        </a>
      </Link>
    </div>
  </Header>
)

export default Nav
