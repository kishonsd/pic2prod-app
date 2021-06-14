import axios from 'axios'
import store from '@/store'

/**
 *
 *
 * @param {*} path
 * @param {*} options
 * @return {*} 
 */
async function serverUtil (path, options) {
  return axios({
    url: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8081/api/' + path,
    method: 'GET',
    withCredentials: true,
    ...options
  })
    .then(response => {
      if(response.data) {
        store.dispatch('toast/success', `${response.status} ${response.statusText}`)
        return response.data
      }
    })
    .catch(err => {
      console.error(err)
      if (err.response) store.dispatch('toast/error', `${err.response.statusCode} ${err.response.statusText}`)
      else store.dispatch('toast/error', '500 Server Internal Server Error')
    })
}

export default serverUtil
