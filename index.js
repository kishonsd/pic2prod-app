require('dotenv').config()
const api = require('./api')

const server = api.start()
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
