/**
 * EVERY CHANGE NEEDS TO RESTART SERVER
 */
const routes = require('next-routes')

module.exports = routes()
  .add('/', 'home')
  .add('/signin', 'public/signin')
  .add('/signup', 'public/signup')
  .add('/profile/:username', 'private/profile')
  .add('/profile/:username/edit', 'private/editUser')
  .add('/signout', 'private/signout')
  .add('/wallpaper/create', 'private/create')
  .add('/wallpaper/:id', 'wallpaper')
