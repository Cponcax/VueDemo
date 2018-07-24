const pkg = state => state.pkg
const app = state => state.app
const device = state => state.app.device
const sidebar = state => state.app.sidebar
const effect = state => state.app.effect
const menus = state => state.menus

export {
  pkg,
  app,
  device,
  sidebar,
  effect,
  menus
}
