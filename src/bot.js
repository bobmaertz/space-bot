const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);

var retweet = function() {
    var params = {
        q: '#space, #nasa',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    bot.get('search/tweets', params, function (err, data) {
        // if there no errors
        if (!err) {
            // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            console.log('Something went RIGHT while SEARCHING...');
            console.log( data.statuses[0].text);

        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...');
        }
    });
};

retweet();

setInterval(retweet, 3000000);
