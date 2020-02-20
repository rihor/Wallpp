import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, ErrorMessage, Form } from 'formik'

import { FormContainer } from './styles'

function CustomForm({
  initialData = undefined,
  username = false,
  email = false,
  password = false,
  passwordConfirmation = false,
  title = false,
  description = false,
  file = false,
  buttonText,
  onSubmit
}) {
  function getInitialValue() {
    // check if initialData is empty
    if (
      initialData !== undefined &&
      initialData !== null &&
      Object.entries(initialData).length !== 0 &&
      initialData.constructor === Object
    ) {
      return initialData
    }

    const initialValue = {
      username: username ? '' : undefined,
      email: email ? '' : undefined,
      password: password ? '' : undefined,
      password_confirmation: passwordConfirmation ? '' : undefined,
      title: title ? '' : undefined,
      description: description ? '' : undefined,
      file: file ? null : undefined
    }

    return initialValue
  }

  return (
    <FormContainer>
      <Formik initialValues={getInitialValue()} onSubmit={onSubmit}>
        {() => (
          <Form>
            {title && (
              <div>
                <label htmlFor="title">Title</label>
                <Field name="title" id="title" />
                <ErrorMessage name="title" />
              </div>
            )}
            {description && (
              <div>
                <label htmlFor="description">Description</label>
                <Field
                  name="description"
                  id="description"
                  component="textarea"
                />
                <ErrorMessage name="description" />
              </div>
            )}
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
                <Field name="email" id="email" type="email" />
                <ErrorMessage name="email" />
              </div>
            )}
            {password && (
              <div>
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" type="password" />
                <ErrorMessage name="password" />
              </div>
            )}
            {passwordConfirmation && (
              <div>
                <label htmlFor="password_confirmation">
                  Password confirmation
                </label>
                <Field
                  name="password_confirmation"
                  id="password_confirmation"
                  type="password"
                />
                <ErrorMessage name="password_confirmation" />
              </div>
            )}
            <button type="submit">{buttonText}</button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

CustomForm.propTypes = {
  username: PropTypes.bool,
  email: PropTypes.bool,
  password: PropTypes.bool,
  title: PropTypes.bool,
  description: PropTypes.bool,
  file: PropTypes.bool,
  passwordConfirmation: PropTypes.bool,
  initialData: PropTypes.shape({}),
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default CustomForm
