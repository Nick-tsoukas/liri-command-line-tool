console.log("this is loaded");

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_key: process.env.TWITTER_CONSUMER_SECRET,
  consumer_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  consumer_key: process.env.TWITTER_ACCESS_TOKEY_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
