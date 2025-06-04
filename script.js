/* Live Time Function */
function displayTime() {
    let currentTime = new Date(); 
    let formattedTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById("current-time").textContent = formattedTime;
}

displayTime(); 
setInterval(displayTime, 1000); // Update every second