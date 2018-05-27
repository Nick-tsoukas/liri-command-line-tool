               require("dotenv").config(); // config env first ...
               // ================================================

const figlet = require('figlet'),
      clc    = require('cli-color'),
      notice = clc.blue,
      error  = clc.red.bold,
      warn   = clc.yellow,
      greenBright = clc.greenBright.bold;


var   fs = require('fs'),
      Twitter = require("twitter"),
      Spotify = require('spotify-web-api-node'),
      keysFile = require("./keys"),
      speak = require("./speak"),
      request = require("request"),
      inquirer = require("inquirer"),
      fs = require("fs");

var params = {screen_name: 'NickTsouaks'};

const template =
`

For twitter cli type node liri.js my-tweets

  For Spotify cli type node liri.js play-song <song name>

    For Movie Api cli type node liri.js my-tweets

`


// ====================Instuctions====================================
    console.log(error('=================='), warn('Read Instructions'), error('========================'))
    console.log(error('Nick and his Donkey were here! \n'));
    console.log(greenBright(template));
    console.log(error('====================================================================================================='));
// ====================End_Of_Instructions============================


figlet('HI + LADIES + GENTS !', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});


var client = new Twitter(keysFile.twitter);

function buildTweets(){

}

process.argv.forEach((val, index) => {

  if (process.argv[2] == 'my-tweets' && index === 2) {
    // console.log(val, " : Lets get tweets : index", index);

    figlet('tweets!', function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
      console.log(error("=================================="))
    });

    function t(tweets){
        tweets.forEach( (val,index) => {
          if(index < 5) {
            console.log(`${index + 1} `, "\n", greenBright(val.text), "\n");
          }
          return;
        });
    }

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        t(tweets);
        // console.log(tweets[0]);
      }
});
    // print 20 tweets from twitter api
  }

  // spot
  if (process.argv[2] == 'play-song' && index === 2) {
    console.log(process.argv[2]);
  }

});

// function tweetPost(newTweet){
//    takes "newTweet" and posts it to twitter account
//   client.post('statuses/update', {status: `${newTweet}`},  function(error, tweet, response){
//     if(error){
//       console.log(error);
//     }
//     console.log(tweet.text);   Tweet body.
//   });
// };

// var spotify = new Spotify(keys.spotify);

// console.log(spotify._credentials.id + " is the id");
// console.log(spotify._credentials.secret + 'this is the secret!!!!');

// var params = {
//     screen_name: 'NickTsoukas',
//     count: 20
//     }
// constructor functions for twitter(client ie) and Spotify
// calling the function will post tweets ... ...
// tweetPost("Just testing program will stop posting ... ...")
