function handleDates(startDate, endDate) {
    
    const returnDate = new Date(endDate);
    const depart = new Date(startDate);
    const today = new Date();
    
    let daysLeft = Math.abs(depart.getTime() - today.getTime());
    let tripDays = Math.abs(returnDate.getTime() - depart.getTime());
    
    const countdown = Math.round(daysLeft / (1000 * 60 * 60 * 24)); 
    const duration = Math.ceil(tripDays / (1000 * 60 * 60 * 24));

    return { depart: startDate, duration: duration, countdown: countdown + 1};
}

export { handleDates };