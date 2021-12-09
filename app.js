const express = require('express');
const app = express();

app.use(express.static('client'));
app.use(express.json());

const goats = [
  {
    name: 'Phil',
    fact: 'Stars in Hercules'
  },
  {
    name: 'Billy',
    fact: 'Stars in Stardust'
  },
  {
    name: 'Mr Tumnus',
    fact: 'Features in The Lion, the Witch and the Wardrobe'
  },
  {
    name: 'Jocelyn Bell Burnell',
    fact: 'Discovered pulsars'
  }
];

app.get('/goat/question', function (req, resp) {
  const q = req.query.goat_question;
  const answers = [];
  for (const goat of goats) {
    if (goat.name.includes(q) || goat.fact.includes(q)) {
      answers.push(goat);
    }
  }
  resp.json(answers); // resp.send would also send as JSON
});

app.get('/random/', function (req, resp) {
  const rand = Math.floor(Math.random() * goats.length);
  const goat = goats[rand];
  const name = goat.name;
  const fact = goat.fact;
  resp.json(name + ' ' + fact);
});

app.post('/goat/add', function (req, resp) {
  const newGoat = req.body;
  goats.push(newGoat);
  resp.json(goats);
});

module.exports = app;
