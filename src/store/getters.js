const pkg = state => state.pkg
const app = state => state.app
const device = state => state.app.device
const sidebar = state => state.app.sidebar
const effect = state => state.app.effect
const menuitems = state => state.menu.items
const token = state => state.user.token
const avatar = state => state.user.avatar
const name = state => state.user.name
const roles = state => state.user.roles
const permissionRouters = state => state.permission.routers
const addRouters = state => state.permission.addRouters
const componententry = state => {
  return state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}

export {
  pkg,
  app,
  device,
  token,
  avatar,
  name,
  roles,
  permissionRouters,
  addRouters,
  sidebar,
  effect,
  menuitems,
  componententry
}
