const express = require('express')
const app = express()


const users = ['Asad','Emon','Remon','Alvee','Ashiq','Tausif'];

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
});

app.get('/user/:id',(req,res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id:id, name:name});
})

app.listen(3000, () => console.log("Listening to port 3000") );