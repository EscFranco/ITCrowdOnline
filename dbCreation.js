import knex from 'knex'
import sqlLITE3 from "./src/config.js";


const LITE = async () => {
    try {
        const dbClient = knex(sqlLITE3.config);
        await dbClient.schema.hasTable(sqlLITE3.table).then((exists) => {
            if (!exists) {
                return dbClient.schema.createTable(sqlLITE3.table, (table) => {
                    table.increments('id').primary();
                    table.string('name');
                    table.string('description');
                    table.string('image');
                    table.decimal('price', 14, 2);
                    table.string('brand');
                    table.string('type');
                });
            }
        });
        await dbClient.destroy();
        console.log('se creo la tabla');
    } catch (error) {
        console.log(error);
    }
};

const array = [
    {
        name: 'Test',
        description: 'Hola esto es un test',
        price: 250
    },

    {
        name: 'TEst2',
        description: 'Hola esto es un test2',
        price: 250
    }
]

const insertTable = async () => {
    try {
        const base = knex(sqlLITE3.config)
        await base(sqlLITE3.table).insert(array)

    } catch (error) {
        console.log(error);
    }
}
