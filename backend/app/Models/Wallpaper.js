'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Wallpaper extends Model {
  user() {
    return this.hasOne('App/Models/User', 'user_id', 'id')
  }

  file() {
    return this.hasOne('App/Models/File', 'file_id', 'id')
  }
}

module.exports = Wallpaper
