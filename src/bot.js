var nasa = require('./lib/services/nasa.mars.service.js');
var twitter = require('./lib/services/twitter.service.js');
const config = require('./conf/config');

let nasaService = new nasa('DEMO_KEY');
let twitterService = new twitter(config);

nasaService.getMarsRovers();
//nasaService.getRoverCameras("spirit");

twitterService.searchTweets('#nasa');
