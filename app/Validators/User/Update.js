'use strict'

const Antl = use('Antl')

class User {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      // validation rules
      username: 'string',
      email: 'email',
      password: 'confirmed'
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = User
