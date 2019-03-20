// LiriBot
// Takes in arguments and returns data
// Uses API's
    // Spotify: songs
    // Bands in Town: concerts
    // OMDB: movies
// Uses Promise based HTTP Client
    // Axios
// Uses JS Library
    // Moment
// Commands (Switch)
    // Bands in Town: node liri.js concert-this <artist/band name here>
        //link: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        // Includes
            // Name of the venue
            // Venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
    // Spotify: node liri.js spotify-this-song '<song name here>'
        // Includes
            // Artist(s)
            // The song's name
            // A preview link of the song from Spotify
            // The album that the song is from
        // If none come up
            // default to "The Sign" by Ace of Base
    // OMDB: node liri.js movie-this '<movie name here>'
        // Includes
            // Title of the movie.
            // Year the movie came out.
            // IMDB Rating of the movie.
            // Rotten Tomatoes Rating of the movie.
            // Country where the movie was produced.
            // Language of the movie.
            // Plot of the movie.
            // Actors in the movie.
        // No movie
            // output data for the movie 'Mr. Nobody'
    // node liri.js do-what-it-says
        // run spotify-this-song
            // "I Want it That Way,"
            // ???Edit the text in random.txt to test out the feature for movie-this and concert-this
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment")
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
var fs = require("fs")

var userCommand = process.argv[2];
var userSubject = process.argv.slice(3).join("+");
console.log(userSubject)

// Data Pulls


function concertCall(){
    var queryURLBands = "https://rest.bandsintown.com/artists/" + userSubject + "/events?app_id=codingbootcamp";
    axios.get(queryURLBands).then(
        function(response){
            var time = moment(response.data[0].datetime, "YYYY-MM-DD-HH:mm:ss").format("MM/DD/YYYY");
            console.log("Name of Venue: " + response.data[0].venue.name + "\nVenue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country + "\nDate of the Event: " + time)
        }
    )
};

function movieCall(){
    if(!userSubject){
        userSubject = "Mr.+Nobody";
    }
    var queryURLMovies = "http://www.omdbapi.com/?t=" + userSubject + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURLMovies)
    .then(
    function(response) {
        console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry Produced: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors);
    });
};

function songCall(){
    if(!userSubject){
        userSubject = "The Sign Ace of Base"
    };
    spotify.search({ type: 'track', query: userSubject, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        };
        console.log(data.tracks.items[0].album)
    });
};
// function doThings(){
//     fs.readFile("random.txt", "utf8", function(err, data) {
//         if (err) {
//           return console.log(err);
//         }
// }

// switch

switch(userCommand){
    case "concert-this":
        concertCall();
        break;
    case "spotify-this-song":
        songCall();
        break;
    case "movie-this":
        movieCall();
        break;
    case "do-what-it-says":
        console.log("something")
        break;
    default:
        console.log("Oopsie Poops")
}