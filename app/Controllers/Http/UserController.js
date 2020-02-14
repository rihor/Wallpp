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

    await user.load('wallpapers.file')

    return user
  }

  async update({ request, params }) {
    const data = request.all()

    const user = await User.findByOrFail('username', params.username)

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
