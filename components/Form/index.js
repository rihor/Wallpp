import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, ErrorMessage, Form } from 'formik'

import { FormContainer } from './styles'

function MyForm({ username, email, password, title, description, file }) {
  function getInitialValue() {
    const initialValue = {
      username: username ? '' : undefined,
      email: email ? '' : undefined,
      password: password ? '' : undefined,
      title: title ? '' : undefined,
      description: description ? '' : undefined,
      file: file ? null : undefined
    }

    return initialValue
  }

  function handleSubmit(data) {
    alert(JSON.stringify(data))
  }

  return (
    <FormContainer>
      <Formik initialValues={getInitialValue()} onSubmit={handleSubmit}>
        {() => (
          <Form>
            {username && (
              <div>
                <label htmlFor="username">Username</label>
                <Field name="username" id="username" />
                <ErrorMessage name="username" />
              </div>
            )}
            {email && (
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" id="email" />
                <ErrorMessage name="email" />
              </div>
            )}
            {password && (
              <div>
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" />
                <ErrorMessage name="password" />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

MyForm.propTypes = {
  username: PropTypes.bool,
  email: PropTypes.bool,
  password: PropTypes.bool,
  title: PropTypes.bool,
  description: PropTypes.bool,
  file: PropTypes.bool
}

export default MyForm
