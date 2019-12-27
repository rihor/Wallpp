'use strict'

const Antl = use('Antl')

class WallpaperStore {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      title: 'required|string',
      description: 'string',
      file_id: 'required|integer'
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = WallpaperStore
