const { application } = require('express');
const express = require('express')
const app = express()

app.use(express.static('client'));
app.use(express.json());

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
  let q = req.query.goat_question;
  let answers = [];
  for(let goat of goats){
    if(goat.name.includes(q) || goat.fact.includes(q)){
      answers.push(goat);
    }
  }
  resp.json(answers); // resp.send would also send as JSON
})


app.get('/random/', function(req, resp){
  let rand = Math.floor(Math.random() * goats.length)
  const goat = goats[rand];
  const name = goat.name;
  const fact = goat.fact;
  resp.send(name + ' ' + fact);
})

app.post('/goat/add', function(req, resp){
  let newGoat = req.body.goat;
  console.log(req.body);
  resp.send("Well it worked")
});

module.exports = app;
