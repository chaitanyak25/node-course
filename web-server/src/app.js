const express = require("express");
const path = require("path");

const app = express();

// api.com
// api.com/help
// api.com/about

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

// app.get('', (req, res) => {
//     res.send("<h1>Hello Express</h1>");
// })

app.get('/help', (req, res) => {
    res.send({
        name:'Chaitu'
    });
})

app.listen("8989", () => {
    console.log("listening 8989");
})