import axios from 'axios'
import Mgr from '@/services/SecurityService'

const mgr = new Mgr()

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
  mgr.getAcessToken().then(
    sucess => {
      config.headers['X-Token'] = sucess
    },
    err => {
      console.log(err)
    })
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 0) {
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
