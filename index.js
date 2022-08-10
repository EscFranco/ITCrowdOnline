// -----------------  EXPRESS --------------------- //
import path from 'path'
import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// -----------------  DBCONFIG --------------------- //

import sqlLITE3 from './src/config.js'
import accessDB from './src/contenedor/containerDB.js'

let api = new accessDB(sqlLITE3.config, sqlLITE3.table)

// -----------------  API --------------------- //

app.get('/productos', async function (req, res) {

    const check = Object.keys(req.query).length

    if (check === 0) {
        const items = await api.getAllItems()
        res.send(items)
    } else {
        const items = await api.getByCategory(req.query.categoria)
        res.send(items)
    }

})

app.get('/productos/:id', async function (req, res) {
    const item = await api.getByID(parseInt(req.params.id))
    if (item === undefined) {
        res.end()
    } else {
        res.send(item)
    }
})

app.post('/productos', async function (req, res) {
    const items = await api.newItem(req.body)
    res.send ({
        message: 'Producto agregado correctamente',
        items
    })
})

app.put('/productos', async function (req, res) {
    const items = await api.updateItem(req.body)
    res.send ({
        message: 'Producto modificado correctamente',
        items
    })
})

app.delete('/productos/:id', async function (req, res) {
    const item = await api.deleteItem(parseInt(req.params.id))
    res.send ({
        message: 'Producto eliminado correctamente',
        item
    })
})

// -----------------  SERVER  --------------------- //

const PORT = 5000 || process.env.port
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


