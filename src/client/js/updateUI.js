function updateUI(trip_info) {
    // hide form
    const formElement = document.getElementById('travel-form');
    formElement.style.display = "none";

    // Add travel data
    const box = document.getElementById('box');
    box.innerHTML = `
        <div class="results" id="results">
            <div class="results__image">
                <img src="${trip_info.image_url}" alt="${trip_info.city}">
                <div class="cityName">${trip_info.city}</div>
            </div>
            <div class="results__text">
                <h3 class="results__header">Trip Destination : <strong>${trip_info.city}</strong></h3>
                <p class="results__header"><strong>Starting dates : </strong>${trip_info.depart}</p><br>
                <p><strong>Days left : </strong>${trip_info.countdown} days</p>
                <p><strong>Trip Duration : </strong>${trip_info.duration} days</p><br>
                <p class="results__weather">
                    <span class="results__weather-header"><strong>WEATHER FORECAST : </strong></span><br>
                    High of ${trip_info.high_temp}&deg;Celsius<br>low of ${trip_info.low_temp}&deg;Celsius<br>
                    ${trip_info.forecast}
                </p>
            </div>
        </div>
    `
}

export { updateUI };