const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');

const inventoryArray = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('listening on port', port);
  });

//get array of inventory
app.get('/inventory', (req, res) => {
    res.send(inventoryArray);
});

app.post('/inventory', (req,res) => {
  const newInventory = req.body;
  inventoryArray.push(newInventory);
  res.send('All good');
});