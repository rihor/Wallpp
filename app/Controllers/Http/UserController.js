'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  // uses username to get user
  async show({ params }) {
    const user = await User.findByOrFail('username', params.username)

    await user.load('wallpapers')

    return user
  }
}

module.exports = UserController
