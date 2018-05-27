require("dotenv").config(); // config env first #F \ \ \ \

const figlet = require('figlet');
      clc    = require('cli-color');

var   fs     = require('fs');

const notice = clc.blue,
      error  = clc.red.bold,
      warn   = clc.yellow;

figlet('HI + LADIES + GENTS !', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

console.log(error('=================='), warn('Read Instructions'), error( '========================' ))
console.log( error('Nick and dog was here!') );
console.log( error('=========================================='));


var Twitter   = require("twitter"),
    Spotify   = require('spotify-web-api-node'),
    keysFile  = require("./keys"),
    speak     = require("./speak")
    request   = require("request"),
    inquirer  = require("inquirer")
    fs        = require("fs");

// var params = {
//     screen_name: 'NickTsoukas',
//     count: 20
//     }
// constructor functions for twitter(client ie) and Spotify

var client = new Twitter(keysFile.twitter);
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
