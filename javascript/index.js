function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement= losAngelesElement.querySelector(".date");
let losAngelesTimeElement= losAngelesElement.querySelector(".time");
let losAngelesTime =moment().tz("America/Los-Angeles");


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM D YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
);
}

let torontoElement = document.querySelector("#toronto");
if (torontoElement) {
let torontoDateElement= torontoElement.querySelector(".date");
let torontoTimeElement= torontoElement.querySelector(".time");
let torontoTime =moment().tz("America/Toronto");


torontoDateElement.innerHTML = torontoTime.format("MMMM D YYYY");
torontoTimeElement.innerHTML = torontoTime.format(
    "h:mm:ss [<small>]A[</small>]"
);
}

let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement= parisElement.querySelector(".date");
let parisTimeElement= parisElement.querySelector(".time");
let parisTime =moment().tz("Europe/Paris");


parisDateElement.innerHTML = parisTime.format("MMMM D YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]"
);
}

}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement= document.querySelector("#cities");
    citiesElement.innerHTML = ` 
    <div class="city">
        <div>
        <h2>${cityTimeZone}</h2>
        <div class="date"> ${cityTime.format("MMMM D YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.
            format("A"
            )}</smalll </div>
            </div>
       `
}
let citiesSelect =document.querySelector("#city");

citiesSelect.addEventListener("change",updateCity);