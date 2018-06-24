let Twit = require('twit');


class TwitterService {
    constructor(config) {
        this.twitter = new Twit(config);
    }

    postTweet(name, message, media_id) {
        const options = {
            name: name,
            status: message,
            media_id: media_id
        };

        this.twitter.post("statuses/update", params, function (err, data) {
            console.log('Posted image of ...');
        }).onerror(message);
        {
            console.log(message.toString())
        }
    }

    searchTweets(query) {
        var params = {
            q: query,
            result_type: 'recent',
            lang: 'en'
        }
        this.twitter.get('search/tweets', params, function (err,  data, response) {
            if (!err && response.statusCode === 200) {
                console.log(data.statuses);
               return data;
            }else {
                // if unable to Search a tweet
                console.log('Problem with twitter search: '+ err);
            }
        });
    }

}
module.exports = TwitterService;
