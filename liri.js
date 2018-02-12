require("dotenv").config();

var request = require('request');

var Spotify = require('node-spotify-api');

var Twitter = require('twitter');

var fs = require('fs');

var keys = require("./keys")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2]; //command for LIRI
var searchTerm = process.argv[3]; //second argument: song name/movie name

switch(command){
	case "my-tweets":

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

	var queryUrl = "https://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(err, res, body) {

		var movie = JSON.parse(body);

		console.log("Title: " +movie.Title);
		console.log("\nRelease Year: " +movie.Year);
		console.log("\nIMDB Rating: " +movie.imdbRating);
		console.log("\nCountry: " +movie.Country);
		console.log("\nLanguage: " +movie.Language);
		console.log("\nPlot: " +movie.Plot);
		console.log("\nActors: " +movie.Actors);
	});

	break;

	case "do-what-it-says":
	fs.readFile("random.txt", "utf8", function(error, data) {
		console.log("random.txt says... " + data);

		var args = data.split(",");
		console.log(args[0]);
		console.log(args[1]);

		//can't figure out what to do from here. Obviously I could hard code in the spotify search,
		//but that wouldn't work if I wanted to be able to run different commands based on what was in
		//the random.txt file
	})
	break;
}