const cron = require('node-cron')
const main = require('./src/main')

cron.schedule('* * * * *', () => {
    main()
})