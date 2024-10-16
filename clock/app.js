
function updateClock(){
     const now = new Date ();
     let hours = now.getHours().toString().padStart(1, 0);
     const meridiem = hours>= 12? "PM":"AM";
     hours = hours % 12||12;
     hours=hours.toString().padStart(1, 0);
     const seconds = now.getSeconds().toString().padStart(1, 0);
     const minutes = now.getMinutes().toString().padStart(1, 0);
     const timestring = `${hours}:${minutes}:${seconds}:${ meridiem }`;
     document.getElementById("clock").textContent = timestring;
}

updateClock();
setInterval (updateClock, 1000);