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

Route.post('users', 'UserController.store').validator('User/Store')
Route.post('session', 'SessionController.store').validator('Session')

Route.get('/files/:id', 'FileController.show')

/**
 * Private routes
 */
Route.group(() => {
  Route.post('/files', 'FileController.store')

  Route.get('/users/:username', 'UserController.show')

  Route.put('/users/:username/edit', 'UserController.update').validator(
    'User/Update'
  )
}).middleware(['auth'])

Route.resource('wallpapers', 'WallpaperController')
  .apiOnly()
  .validator(
    new Map([
      [['wallpapers.store'], ['Wallpaper/Store']],
      [['wallpapers.update'], ['Wallpaper/Update']]
    ])
  )
  .middleware(new Map([[['store', 'update', 'destroy'], ['auth']]]))

Route.get('/', () => {
  return { message: "Try route /users/" }
})
