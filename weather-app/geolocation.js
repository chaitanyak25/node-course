const request = require("request");

const geoLocate = (location, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?access_token=pk.eyJ1IjoiY2hhaXRhbnlhazI1IiwiYSI6ImNrNzA1ZGxxNjFjMDIzbG12aXMwbmQ3cjkifQ._mhYCO8Al44vL5ULiHPmZg";
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            return;
        } else {
            const obj = {
                "latitude": body.features[0].center[0],
                "longitude": body.features[0].center[1],
                "location": location
            }
            callback(obj);
        }
    })
}

module.exports = geoLocate;