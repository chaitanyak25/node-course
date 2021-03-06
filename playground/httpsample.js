const https = require("https");
const url = "https://api.darksky.net/forecast/ef4db949625be00dd6895437c791a969/37.8267,-122.4233";

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(error);
})

request.end()