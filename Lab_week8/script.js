function generate(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let result = JSON.parse(this.responseText);

        document.getElementById("ip").innerHTML = result.ip;
        document.getElementById("city").innerHTML = result.city;
        document.getElementById("internet").innerHTML = result.org;
        sp = result.loc.split(',');
        document.getElementById("latitude").innerHTML = sp[0];
        document.getElementById("longitude").innerHTML = sp[1];
        document.getElementById("time").innerHTML = result.timezone;
    } 
    xhttp.open("GET", "https://ipinfo.io/geo");
    xhttp.send();
}
