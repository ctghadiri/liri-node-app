require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var axios = require("axios");

axios.get().then(
    function(response){

    }
)

// LiriBot
// Takes in arguments and returns data
// Uses API's
    // Spotify: songs
    // Bands in Town: oncerts
    // OMDB: movies
// Uses CLI
    // Inquiry
// Uses Promise based HTTP Client
    // Axios
// Uses JS Library
    // Moment
// Commands (Switch Case)
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
