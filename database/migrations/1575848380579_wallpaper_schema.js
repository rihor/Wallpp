'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WallpaperSchema extends Schema {
  up() {
    this.create('wallpapers', table => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('wallpapers')
  }
}

module.exports = WallpaperSchema
