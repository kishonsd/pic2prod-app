import axios from 'axios'

async function serverUtil (path, options) {
  return axios({
    url: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api/' + path,
    ...options
  })
    .then(response => response.data ? response.data : false)
    .catch(err => {
      if (err.response) alert(`${err.response.statusCode} ${err.response.statusText}`)
      else alert('500 Server Internal Server Error')
    })
}

export default serverUtil
