import React, { useEffect } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { MdClear } from 'react-icons/md'

import Api from '../../services/api'
import Cookie from '../../services/cookie'
import Nav from '../../components/Nav'
import WallpaperCard from '../../components/WallpaperCard'
import { PageContainer, BodyContainer } from '../../styles/layout'
import { Hero, UserInfo, UserNotFound, List } from '../../styles/profile'

const Profile = ({ userExists, wallpapers, user }) => {
  useEffect(() => {
    if (!userExists) {
      Router.push('/home')
    }
  }, [])

  return (
    <PageContainer>
      <Nav user={user} />
      <BodyContainer>
        {userExists ? (
          <>
            <Hero>
              <img src="https://api.adorable.io/avatars/120/face.png" />
              <UserInfo>
                <h1>{user.username}</h1>
              </UserInfo>
            </Hero>
            <List>
              {wallpapers &&
                wallpapers.map(w => <WallpaperCard key={w.id} wallpaper={w} />)}
            </List>
          </>
        ) : (
          <UserNotFound>
            <MdClear />
            User not found
          </UserNotFound>
        )}
      </BodyContainer>
    </PageContainer>
  )
}

Profile.getInitialProps = async ctx => {
  const token = Cookie.getSession(ctx)

  try {
    const { username, email, wallpapers } = await Api.get({
      pathUrl: `users/${ctx.query.username}`,
      token
    })

    return {
      userExists: true,
      user: { username, email },
      wallpapers
    }
  } catch (error) {
    return {
      userExists: false
    }
  }
}

Profile.propTypes = {
  userExists: PropTypes.bool,
  wallpapers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string
  })
}

export default Profile
