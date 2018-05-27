module.exports.tweet = function (newTweet) {
  
  client.post('statuses/update', {status: `${newTweet}`},  function(error, tweet, response){
    if(error){
      console.log(error);
    }
    console.log(tweet.text);  // Tweet body.
  });
};
// calling the function will post tweets ... ...
// tweetPost("Just testing program will stop posting ... ...")
