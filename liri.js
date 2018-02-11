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