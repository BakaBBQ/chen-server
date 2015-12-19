"use strict"
const express = require("express");
const google = require("google");
const cors = require("cors");

const config = require("./config");

let app = express();

app.use(cors());

google.resultsPerPage = 15;

app.get('/search', function(req, res){
  let query = req.query.str;
  var googleResults;
  google(query, function(err, next, links){
    if (err){
      console.log("Error in search!, searching: " + query);
      googleResults = err;
    } else {
      googleResults = links;
    }
    res.json(googleResults);
  });
});

let server = app.listen(config.port, function () {
  console.log("Chen Server Starting")
});
