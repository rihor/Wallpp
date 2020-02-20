'use strict'

const Antl = use('Antl')

class WallpaperUpdate {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      title: 'string',
      description: 'string',
      file_id: 'integer'
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = WallpaperUpdate
