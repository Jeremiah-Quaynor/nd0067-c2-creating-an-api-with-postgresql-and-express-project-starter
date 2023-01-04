import { Request } from "express"
import { Product, productType } from "./models/product"

const express = require("express")
const bodyParser = require("body-parser")


const app = express()

//creating an instance of Product
const product = new Product();

app.use(bodyParser.json())

const address = "0.0.0.3000"

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Home route');
});

// get products
app.get('/product', async(req: any , res: { send: (arg0: productType[]| string) => void; status: (arg0: number) => void; json: (arg0: unknown) => void })=> {
    try{ 
        const result = await product.index()
        res.send(result)
    }catch (err) {
        res.status(400)
        res.json(err)
    }
})
//get a product
app.get('/product/:id', async(req: { params: { id: string } } , res: { send: (arg0: productType| string) => void; status: (arg0: number) => void; json: (arg0: unknown) => void })=> {
    try{ 
        const id = req.params.id;
        const result = await product.show(id)
        res.send(result)
    }catch (err) {
        res.status(400)
        res.json(err)
    }
})

// create a new product
app.post('/product/add', async(req: { params: { body: {name:string, price:string, category: string} } } , res: { send: (arg0: productType| string) => void; status: (arg0: number) => void; json: (arg0: unknown) => void })=> {
    try{ 
        const {name, price, category } = req.params.body
        const result = await product.create(name,Number(price),category)
        res.send(result)
    }catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.listen(3000,function () {
    console.log(`starting app on ${address}`)
})