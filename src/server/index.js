/* env for APIs */
const dotenv = require('dotenv');
dotenv.config();

/* global variables and express initialisation */
const express = require('express');
const fetch = require("node-fetch");
const app = express();

// Dependencies 
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Spin up the server
const port = 8081;
const server = app.listen(port, () => {
    console.log(`Localhost ${port} running`);
})

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
})



app.post('/getLocation', async(req, res) => {
    const link = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${process.env.GeonamesKey}`;
    const response = await fetch(link);
    try {
        const data = await response.json();
        let coordinates = {
            lat: data.geonames[0].lat,
            long: data.geonames[0].lng
        };
        res.send(coordinates);
    } catch (error) {
        console.log("ERROR", error);
    }
})

app.post('/getWeather', async(req, res) => {
    const link = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.long}&key=${process.env.WeatherbitKey}`;
    const response = await fetch(link)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("ERROR", error);
    }
})

app.post('/getPhoto', async(req, res) => {
    const link = `https://pixabay.com/api/?key=${process.env.PixabayKey}&q=${req.body.city}&image_type=photo`;
    const response = await fetch(link)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("ERROR", error);
    }
})