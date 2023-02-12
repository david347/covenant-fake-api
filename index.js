const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

const poll_name = "asamblea-test";

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/:pollname/question/:id', (req, res) => {

  const pollName = req.params.pollname;

  if (pollName!= poll_name) {
    res.status(404).send('Not Found');
  }
  const questionData = {
    id: 1,
    name: "¿question test ?",
    type: "AB",
    responses: [
      {name:"a. respuesta", value: 0.3},
      {name:"b. respuesta", value: 0.4},
      {name:"c. respuesta", value: 0.6},
      {name:"d. respuesta", value: 0.15}
    ]
  };
  res.send(questionData)
});

app.get('/:pollname/quorum', (req, res) => {
  const pollName = req.params.pollname;

  if (pollName!= poll_name) {
    res.status(404).send('Not Found');
  }

  const mockQuorum = {
     data : [
      { user: "2121", name: "Felipe", coeff: 0.28 },
      { user: "2122", name: "Carlos", coeff: 0.28 }
    ]
  };
  res.json(mockQuorum);
});

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})