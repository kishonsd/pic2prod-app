const cron = require('node-cron')
const main = require('./lib/bots')

cron.schedule('* * * * *', () => {
    main()
})