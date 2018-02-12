require("dotenv").config();

var request = require('request');

var Spotify = require('node-spotify-api');

var Twitter = require('twitter');

var keys = require("./keys")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2]; //command for LIRI
var searchTerm = process.argv[3]; //second argument: song name/movie name

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

	if(searchTerm === undefined){
		searchTerm = "The Sign by Ace of Base";
	}

		spotify.search(
		{
			type: "track",
			query: searchTerm
		},
		function(err, data) {
			if (err) {
				console.log("ERROR: " + err);
			}

			var searchResults = data.tracks.items;

			for (var i = 0; i < searchResults.length; i++) {
				console.log("Artist Name: " + searchResults[i].artists.name); //artist name
				console.log("\nSong Name: " + searchResults[i].name); //song name
				console.log("\nPreview URL: " + searchResults[i].preview_url); //preview url
				console.log("\nAlbum Name: " + searchResults[i].album.name) //album name
				console.log("\n-------------------------------------");

			}

		}
		);
	break;

	case "movie-this":
	console.log("yeet");
	break;

	case "do-what-it-says":
	console.log("yeet");
	break;
}