function validateInput(trip_info) {
    if(trip_info.to == "") {
        alert('Fill your destination');
        return false;
    }
    else if (trip_info.startDate == "" || trip_info.endDate == "") {
        alert('Fill your dates');
        return false;
    }
    return true;
}

export { validateInput };