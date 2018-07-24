import { setStore, getStore } from '@/utils/store'
import { validatenull } from '@/utils/validate'
import { GetMenu } from '@/api/menu'

const menus = {
  state: {
    menus: getStore({
      name: 'menus'
    }) || []
  },
  actions: {
    GetMenu ({commit}) {
      return new Promise(resolve => {
        GetMenu().then((res) => {
          const data = eval(res.data)
          console.log(data)
          data.forEach(ele => {
            ele.children.forEach(child => {
              if (!validatenull(child.component)) child.path = `${ele.path}/${child.path}`
            })
          })
          commit('SET_MENU', data)
          resolve(data)
        })
      })
    }
  },
  mutations: {
    SET_MENU: (state, menus) => {
      state.menus = menus
      setStore({
        name: 'menus',
        content: state.menus,
        type: 'session'
      })
    }
  }
}

export default menus
