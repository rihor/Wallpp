const routes = require('next-routes')

module.exports = routes()
  .add('/', 'home')
  .add('/signin', 'public/signin')
  .add('/signup', 'public/signup')
  .add('/profile/:id', 'private/profile')
  .add('/wallpaper/create', 'private/create')
  .add('/wallpaper/:id', 'wallpaper')
  .add('/wallpaper/:id/edit', 'private/edit')
