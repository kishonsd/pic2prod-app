import axios from 'axios'

/*
    # Server Mixin
    Call pic2prod API [[202104192257 server]].

    | Params  | Type   | Default | Description                  |
    | ------- | ------ | ------- | ---------------------------- |
    | route   | string | null    | path to call in pic2prod API |
    | options | object | {}      | options for axios call       |

    ## Example

    ```js
    await this._api('/user/', {
      method: 'POST',
      data: {
        username: 'john',
        password: 'password'
      }
    })
    ```

    ---

    app: [[202104192256 app]]
    */

const mixin = {
  methods: {
    /**
     *
     *
     * @param {String} route server route to call
     * @param {Object} options Axios options 
     * @return {Object} data from response
     * @example this.server(route, options)
     */
    async server (route, options) {
      return axios({
        url: `http://localhost:3000/api/${route}`,
        ...options
      })
        .then(response => {
          /* Alert status code and status text if success */

          // if (response.status) this.$message.success(
          //   `${String(response.status)} ${response.statusText}`
          // )
          /* Return data */
          return response.data
        })
      // .catch(err => {
      //   /* Alert status code and status text if rejected */
      //   if (err.response.data.details) {
      //     err.response.data.details.forEach(detail => {
      //       this.$message({
      //         message: detail.message,
      //         type: 'warning'
      //       })
      //     })
      //   } else if (err.response.status) this.$message.error(
      //     `${String(err.response.status)} ${err.response.statusText}`
      //   )
      // })
    }
  }
}

export default mixin