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
// var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var userSubject = process.argv[3];


// Data Pulls

var queryURLMovies = "http://www.omdbapi.com/?t=" + userSubject + "&y=&plot=short&apikey=trilogy"
var queryURLBands = "https://rest.bandsintown.com/artists/" + userSubject + "/events?app_id=codingbootcamp"

function concertCall(){
axios.get(queryURLBands).then(
    function(response){
        console.log(response.data[0]);
        var time = moment(response.data[0].datetime, "YYYY-MM-DD-HH:mm:ss").format("MM/DD/YYYY");
        console.log(time);
        console.log("Name of Venue: " + response.data[0].venue.name + "\nVenue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country + "\nDate of the Event: " + time)
    }
)
};

function movieCall(){
axios.get(queryURLMovies)
.then(
  function(response) {
      console.log(response);
    console.log("Title: " + response.title + "\nYear: " + response.year + "\nIMDB Rating: " + response.imdbRating + "\nRotten Tomatoes Rating: " + response.Ratings[1].Value + "\nCountry Produced: " + response.Country + "\nLanguage" + response.Language + "\nPlot: " + response.Plot + "\nActors: " + response.Actors);
  }
);
};

// switch

switch(userCommand){
    case "concert-this":
        concertCall();
        console.log("concert")
        break;
    case "spotify-this-song":
        console.log("spotify")
        break;
    case "movie-this":
        movieCall();
        console.log("movie")
        break;
    case "do-what-it-says":
        console.log("something")
        break;
    default:
        console.log("Oopsie Poops")
}

// questions
