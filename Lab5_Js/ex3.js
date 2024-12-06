const time = new Date().getHours();
const timeOfDay = time < 12 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening";
alert(timeOfDay)