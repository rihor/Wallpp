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
    const user = await User.query()
      .where('username', params.username)
      .with('wallpapers.file')
      .fetch()

    return user
  }
}

module.exports = UserController
