let request = require('request');

const nasaUrl = 'https://api.nasa.gov';

class NasaMarsService{

    constructor(nasaApiKey) {
        this.apiKey = "api_key="+ nasaApiKey;
    }

    getMarsRovers(){
        const options = {
            url: nasaUrl + '/mars-photos/api/v1/rovers?' + this.apiKey,
            headers: {}
        };

        request(options, function(error,response,body){
            if(!error && response.statusCode === 200) {
                const jsonBody = JSON.parse(body);
                console.log(jsonBody);
            }else {
                console.log(error.toString());
            }
        })
    }

    getRoverImages(roverName,earthDate){
        date = "&earth_date="+earthDate;
        const options = {
            url: nasaUrl + '/mars-photos/api/v1/rovers/'+roverName.toLowerCase()+'/photos?'+ this.apiKey+date,
            headers: {}
        };
    }

}

module.exports = NasaMarsService;
