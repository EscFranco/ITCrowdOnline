import path from 'path'

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

export default sqlLITE3;