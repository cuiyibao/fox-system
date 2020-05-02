import axios from 'axios'
// import Toast from 'antd-mobile/lib/toast'
// import 'antd-mobile/lib/toast/style/index.less'
const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data)
    if (config.method === 'post') {
      // config.headers = {
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // }
      config.headers = {
        'Content-Type': 'application/json'
      }
    }

    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    console.log('eerrr', error)
    return Promise.reject(error)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  response => {
    if (response.data.code === 4001) {
      // 跳转登录
      window.bridge.actionWithUrl(`${window.bridge.getScheme()}://invalid/token`)
      return
    }
    if (response.data.code > 7000) {
      return response.data
    }
    const errorCode = [4003, 4004, 5000, 6000, 7000]
    if (errorCode.indexOf(response.data.code) > -1) {
      InfoToast(response.data.message || '网络错误~')
      return
    }
    return response.data.data
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.log('eerrr', err)
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      data => {
        resolve(data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.patch(url, data).then(
      data => {
        resolve(data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(
      data => {
        resolve(data)
      },
      err => {
        reject(err)
      }
    )
  })
}
