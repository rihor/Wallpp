'use strict'

const User = use('App/Models/User')

class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.all()
    let user

    const token = await auth.attempt(email, password)

    if (token) {
      user = await User.findByOrFail('email', email)
    }

    return { ...token, user }
  }
}

module.exports = SessionController
