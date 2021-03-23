const express = require('express')
const app = express()

app.get('/', (req,res) => {
    const bepari = {
        name: "Ada",
        Price: 220
    }
    res.send(bepari);
});
app.get('/products/banana', (req,res) => {
    const banana = {
        name: "banana",
        price: 65,
        quantinity: "10 dozen"}
    res.send(banana);
})

app.listen(3000, () => console.log("Listening to port 3000") );