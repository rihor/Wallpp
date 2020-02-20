import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'

import Api from '../../services/api'
import Cookie from '../../services/cookie'
import Form from '../../components/Form'
import Nav from '../../components/Nav'
import { PageContainer, BodyContainer } from '../../styles/layout'
import { FormContainer } from '../../styles/editUser'

function EditUser({ user }) {
  async function handleSubmit(data) {
    const editedUser = await Api.put({
      pathUrl: `users/${user.username}/edit`,
      data,
      token: Cookie.getSession()
    })

    Router.push(`/profile/${editedUser.username}`)
  }

  return (
    <PageContainer>
      <Nav user={user} />
      <BodyContainer>
        <FormContainer>
          <Form
            email
            username
            password
            passwordConfirmation
            buttonText="Confirm edit"
            initialData={user}
            onSubmit={handleSubmit}
          />
        </FormContainer>
      </BodyContainer>
    </PageContainer>
  )
}

EditUser.getInitialProps = async ctx => {
  const user = await Cookie.getUser(ctx)

  return { user }
}

EditUser.propTypes = {
  user: PropTypes.shape({ username: PropTypes.string })
}

export default EditUser
