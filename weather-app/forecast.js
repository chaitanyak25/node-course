const request = require("request");

const forecast = ({ latitude, longitude }, callback) => {
    const url = "https://api.darksky.net/forecast/ef4db949625be00dd6895437c791a969/" + latitude + "," + longitude;
    request({ url, json: true }, (error, response) => {
        if (error) {
            return;
        } else {
            callback(response.body.currently);
        }
    })
}

module.exports = forecast;