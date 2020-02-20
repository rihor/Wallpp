import React from 'react'
import PropTypes from 'prop-types'

const ToastMessage = ({ messages }) => (
  <>
    {messages.map(message => (
      <p key={message} style={{ margin: 5 }}>
        {message}
      </p>
    ))}
  </>
)

ToastMessage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ToastMessage
