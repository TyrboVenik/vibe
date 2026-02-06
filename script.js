// Set your specific date and time here (Year, Month-1, Day, Hour, Minute, Second)
// Note: Month is 0-indexed (0 = January, 11 = December)
const startDate = new Date(2026, 0, 31, 14, 0, 0);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Total time in different units
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const totalSeconds = Math.floor(diff / 1000);
    
    // For second row: hours with remaining minutes and seconds
    const hoursMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const hoursSeconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update first row (days, hours, minutes, seconds)
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Update second row (total hours with remaining minutes and seconds)
    document.getElementById('totalHours').textContent = totalHours.toLocaleString();
    document.getElementById('totalMinutes').textContent = hoursMinutes.toString().padStart(2, '0');
    document.getElementById('totalSeconds').textContent = hoursSeconds.toString().padStart(2, '0');
    
    // Update third row (total minutes with remaining seconds 0-59 and milliseconds 0-999)
    const minutesSeconds = Math.floor((diff % (1000 * 60)) / 1000);
    const minutesMilliseconds = diff % 1000;
    document.getElementById('onlyMinutes').textContent = totalMinutes.toLocaleString();
    document.getElementById('onlySeconds').textContent = minutesSeconds.toString().padStart(2, '0');
    document.getElementById('onlyMilliseconds').textContent = minutesMilliseconds.toString().padStart(3, '0');
}

// Update immediately and then every millisecond
updateTimer();
setInterval(updateTimer, 1);
