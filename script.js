
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayIndex = today.getDay();
    const dayOfWeek = daysOfWeek[dayIndex];
    document.getElementById("dayOfWeek").textContent = dayOfWeek;
}

function updateUTCTime() {
    const today = new Date();
    const utcTime = today.toISOString().substr(11, 8); 
    document.getElementById("utcTime").textContent = utcTime;
}

updateDayOfWeek();
updateUTCTime();

setInterval(updateDayOfWeek, 1000);
setInterval(updateUTCTime, 1000);
