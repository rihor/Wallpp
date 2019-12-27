'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('user', 'UserController.store').validator('User')
Route.post('session', 'SessionController.store').validator('Session')

Route.get('/file/:id', 'FileController.show')

/**
 * Private routes
 */
Route.group(() => {
  Route.post('/file', 'FileController.store')

  Route.get('/user/:id', 'UserController.show')

  Route.resource('wallpaper', 'WallpaperController')
    .apiOnly()
    .validator(
      new Map([
        [['wallpaper.store'], ['Wallpaper/Store']],
        [['wallpaper.update'], ['Wallpaper/Update']]
      ])
    )
}).middleware(['auth'])
