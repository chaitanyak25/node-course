const forecast = require("./forecast")
const geoLocate = require("./geolocation")


geoLocate("Hyderabad", (res) => {
    forecast(res, (resp) => {
        console.log(res.location + ": " + resp.summary);
    })
})


