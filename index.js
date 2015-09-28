"use strict"
let express = require("express");
let app = express();

let google = require("google");
let config = require("./config")

google.resultsPerPage = 15;

app.get('/:query', function(req, res){
  let query = req.params.query;
  var googleResults;
  google(query, function(err, next, links){
    if (err){
      console.log("Error in search!, searching: " + query);
      googleResults = {};
    } else {
      googleResults = links;
    }
    res.json(googleResults);
  });
});

let server = app.listen(config.port, function () {
  console.log("Chen Server Starting")
});
