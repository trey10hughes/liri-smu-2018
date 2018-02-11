require("dotenv").config();

var request = require('request');

var Spotify = require('node-spotify-api');

var Twitter = require('twitter');

var keys = require("./keys")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2]; //command for LIRI
var arg2 = process.argv[3]; //second argument: song name/movie name

switch(command){
	case "my-tweets":
		console.log("yeet");

		var params = {screen_name: 'nodejs'};

		client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
  			for(var i = 0; i < tweets.length; i++) {
  				console.log("CREATED AT: " + tweets[i].created_at + "\n");

  				console.log("text: " + tweets[i].text + "\n----------------------------------");
  			}
  		}
		});
	break;

	case "spotify-this-song":
	console.log("yeet");
	break;

	case "movie-this":
	console.log("yeet");
	break;

	case "do-what-it-says":
	console.log("yeet");
	break;
}