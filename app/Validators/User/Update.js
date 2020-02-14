'use strict'

const Antl = use('Antl')

class User {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      // validation rules
      username: 'unique:users',
      email: 'email|unique:users',
      password: 'confirmed'
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = User
