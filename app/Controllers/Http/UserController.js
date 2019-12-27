'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id)

    await user.load('wallpapers')

    return user
  }
}

module.exports = UserController
