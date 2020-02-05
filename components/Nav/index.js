import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { MdAddBox } from 'react-icons/md'

import { Header, Button } from './styles'

const Nav = ({ user }) => (
  <Header>
    <div>
      <Link href="/">
        <a>
          <Button>WALLPP</Button>
        </a>
      </Link>
      <Link href="/wallpaper/create">
        <a>
          <Button>
            <MdAddBox />
            NEW POST
          </Button>
        </a>
      </Link>
    </div>

    <div>
      {user ? (
        <Link href={`/profile/${user.username}`}>
          <a>
            <Button>PROFILE</Button>
          </a>
        </Link>
      ) : (
        <>
          <Link href="/signin">
            <a>
              <Button>SIGN IN</Button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <Button>SIGN UP</Button>
            </a>
          </Link>
        </>
      )}
    </div>
  </Header>
)

Nav.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  })
}

export default Nav
