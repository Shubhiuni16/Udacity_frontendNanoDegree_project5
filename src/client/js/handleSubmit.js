async function handleSubmit(that) {
    let projectData = {};

    /* user input */
    let userData = {
        from: that.from.value,
        to: that.to.value,
        startDate: that.depart.value,
        endDate: that.return.value
    };
    await Client.validateInput(userData);
    /* Get countdown and duration of trip*/
    projectData = Client.handleDates(userData.startDate, userData.endDate);

    /* data from Geonames */
    const points = await Client.getData('/getLocation', { location: userData.to})

    /* weatherdata */
    const weather = await Client.getData('/getWeather', { lat: points.lat, long: points.long });
    
    let forecastDay = projectData.countdown;
    
    const weatherData = {
        city: weather.city_name,
        high_temp: weather.data[forecastDay].high_temp,
        low_temp: weather.data[forecastDay].low_temp,
        forecast: weather.data[forecastDay].weather.description
    }

    /* image form Pixabay */
    const image = await Client.getData('/getPhoto', { city: userData.to });
    projectData.image_url = image.hits[0].largeImageURL;

    /* add weatherData and update UI */
    Object.assign(projectData, weatherData);
    Client.updateUI(projectData);    
}

export { handleSubmit };
