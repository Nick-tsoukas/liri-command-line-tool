require("dotenv").config();

var Twitter   = require("twitter"),
    Spotify   = require('spotify-web-api-node'),
    keys      = require("./keys"),
    speak     = require("./speak")
    request   = require("request"),
    inquirer  = require("inquirer")
    fs        = require("fs");

var params = {
    screen_name: 'NickTsoukas',
    count: 20
    }
// constructor functions for twitter(client ie) and Spotify

var client = new Twitter(keys.twitter);
// var spotify = new Spotify(keys.spotify);

// console.log(spotify._credentials.id + " is the id");
// console.log(spotify._credentials.secret + 'this is the secret!!!!');

function tweetPost(newTweet){
  // takes "newTweet" and posts it to twitter account
  client.post('statuses/update', {status: `${newTweet}`},  function(error, tweet, response){
    if(error){
      console.log(error);
    }
    console.log(tweet.text);  // Tweet body.
  });
};



// calling the function will post tweets ... ...
// tweetPost("Just testing program will stop posting ... ...")
