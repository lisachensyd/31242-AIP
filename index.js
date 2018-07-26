const express = require('express')
const app = express()

var http = require('http');
var visits = 0;
app.get('/', function (req, res) {
    visits++;
    res.send('You have visited '+ visits+' times.');
  })

app.listen(3000, () => console.log('Example app listening on port 3000!'))