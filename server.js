const express = require('express')
const app = express()

app.use(express.static('client'));


const goats = [
    { "name": "Phil",
    "fact": "Stars in Hercules"},
    { "name": "Billy",
    "fact": "Stars in Stardust"},
    { "name": "Mr Tumnus",
    "fact": "Features in The Lion, the Witch and the Wardrobe"},
    {"name": "Jocelyn Bell Burnell",
    "fact": "Discovered pulsars"}
    ]

app.get('/goat/question', function (req,resp){
  resp.send(req.query.goat_question);
})


app.get('/random/', function(req, resp){
  let rand = Math.floor(Math.random() * goats.length)
  const goat = goats[rand];
  const name = goat.name;
  const fact = goat.fact;
  resp.send(name + ' ' + fact);
})

app.listen(8090);
