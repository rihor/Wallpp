const routes = require('next-routes')

module.exports = routes()
  .add('/', 'home')
  .add('/sign', 'sign')
  .add('/profile/:id', 'profile')
  .add('/wallpaper/create', 'create')
  .add('/wallpaper/:id', 'wallpaper')
  .add('/wallpaper/:id/edit', 'edit')
