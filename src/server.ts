const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

const address = "0.0.0.3000"

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Home route');
});

app.listen(3000,function () {
    console.log(`starting app on ${address}`)
})