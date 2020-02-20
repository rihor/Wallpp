import React, { useLayoutEffect } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'

import Cookie from '../../services/cookie'
import Nav from '../../components/Nav'
import { PageContainer, BodyContainer } from '../../styles/layout'

export default function SignOut({ user }) {
  useLayoutEffect(() => {
    Router.push('/')
  }, [])

  return (
    <PageContainer>
      <Nav user={user} />
      <BodyContainer>
        <h1 style={{ textAlign: 'center' }}>Signing out</h1>
      </BodyContainer>
    </PageContainer>
  )
}

SignOut.getInitialProps = ctx => {
  const user = Cookie.removeUser(ctx)
  Cookie.removeSession(ctx)

  return { user }
}

SignOut.propTypes = {
  user: PropTypes.shape({})
}
