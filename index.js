const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

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
// post
app.post('/newUser',(req,res) => {
    const user = req.body;
    user.Id = 55;
    res.send(user)
})

app.listen(3000, () => console.log("Listening to port 3000") );