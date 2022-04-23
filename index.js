const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

const cors = require('cors');
const { get } = require('express/lib/response');

app.use(cors())
app.use(express.json())

const users = [
  {id: 2, name: "Toukir"},
  {id: 1, name: "Tanvir"},
  {id: 3, name: "Alomgir"},
  {id: 5, name: "Tanvir ahmed"},
  {id: 4, name: "Sokina"},
  {id: 7, name: "janina"},
  {id: 6, name: "bujina"},
]

app.get('/', (req, res) =>{
  res.send('req send m  y name is tanvir ahmed new')
})

app.get("/users", (req, res) =>{
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(u => u.name.toLowerCase().includes(search))
    res.send(matched)
  }else{
    res.send(users)
  }
} )

app.get("/user/:id", (req, res) =>{
  const id = req.params.id;
  const user = users.find(u => u.id == id);
  res.send(user)
})

app.post("/user", (req, res) =>{
  console.log(req.body)
  const user = req.body;
  user.id = users.length + 1;
  users.push(user)

  res.send(user)
})

app.listen(port, () =>{
  console.log('port name' , port)
})