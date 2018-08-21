'use strict';

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

// enabling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send({
      apple: 3,
      orange: "2",
      fruit: {
        grape: 4
      }
    });
});

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'));
});
