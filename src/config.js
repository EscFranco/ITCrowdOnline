const path = require('path')

const sqlLITE3 = {
    table : 'productos',
    config : {
        client: 'sqlite3',
        connection: {
            filename: path.resolve('DB', 'db.sqlite')
        },
        useNullAsDefault : true
    }
}

module.exports = { sqlLITE3 };