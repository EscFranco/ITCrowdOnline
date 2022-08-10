import knex from 'knex'

// --------------- CONTAINER --------------- //

class accessDB {
    constructor(option,table) {
        this.knex = knex(option)
        this.table = table
    }

    async getAllItems() {
        try {
            return await this.knex.select().from(this.table);
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async getByCategory(object) {
        try {
            return await this.knex.select().from(this.table).where('type', object);
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async getByID(id) {
        try {
            return await this.knex.select().from(this.table).where('id', id).first();
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async getByName(name) {
        try {
            return await this.knex.select().from(this.table).where('name', name).first();
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async newItem(object) {
        try {
            await this.knex(this.table).insert(object)
            return this.getAllItems()
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async updateItem(object) {
        try {
            await this.knex(this.table).where('id', object.id).update(object)
            return this.getAllItems()
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async deleteItem(id) {
        try {
            await this.knex(this.table).where('id', id).del()
            return this.getAllItems()
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }
}

export default accessDB;