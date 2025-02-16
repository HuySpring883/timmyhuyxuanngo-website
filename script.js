/* Live Time Function */
function displayTime() {
    let currentTime = new Date(); 
    let formattedTime = currentTime.toLocaleTimeString();
    document.getElementById("current-time").textContent = formattedTime;
}

displayTime(); 
setInterval(displayTime, 1000); // Update every second