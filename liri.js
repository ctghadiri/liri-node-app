require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var axios = require("axios");

axios.get().then(
    function(response){

    }
)