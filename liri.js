require("dotenv").config();

var Twitter = require("twitter"),
    Spotify = require('spotify-web-api-node'),
    keys    = require("./keys"),
    request = require("request"),
    fs      = require("fs");



 var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
