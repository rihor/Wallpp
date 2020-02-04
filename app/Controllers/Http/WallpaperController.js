'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Wallpaper = use('App/Models/Wallpaper')

/**
 * Resourceful controller for interacting with wallpapers
 */
class WallpaperController {
  /**
   * Show a list of all wallpapers.
   * GET wallpapers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request }) {
    // request.get() has the QUERY params
    const { page } = request.get()

    const wallpapers = await Wallpaper.query()
      .with('file')
      .paginate(page)

    return wallpapers
  }

  /**
   * Create/save a new wallpaper.
   * POST wallpapers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const data = request.only(['title', 'description', 'file_id'])

    const wallpaper = await Wallpaper.create({ ...data, user_id: auth.user.id })

    return wallpaper
  }

  /**
   * Display a single wallpaper.
   * GET wallpapers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const wallpaper = await Wallpaper.findOrFail(params.id)

    // will return with user data
    await wallpaper.load('user')

    return wallpaper
  }

  /**
   * Update wallpaper details.
   * PUT or PATCH wallpapers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const data = request.only(['title', 'description', 'file_id'])

    const wallpaper = await Wallpaper.findOrFail(params.id)

    wallpaper.merge(data)

    await wallpaper.save()

    return wallpaper
  }

  /**
   * Delete a wallpaper with id.
   * DELETE wallpapers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const wallpaper = await Wallpaper.findOrFail(params.id)

    await wallpaper.delete()
  }
}

module.exports = WallpaperController
