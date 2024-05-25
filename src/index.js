function updateTime() {
    let laElement = document.querySelector("#LA");
    if (laElement) {
        let laDateElement = laElement.querySelector(".date");
        let laTimeElement = laElement.querySelector(".time");
        let laTime = moment().tz("America/Los_Angeles");

        laDateElement.innerHTML = laTime.format("MMMM Do YYYY");
        laTimeElement.innerHTML = laTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }

    let kyivElement = document.querySelector("#kyiv");
    if (kyivElement) {
        let kyivDateElement = kyivElement.querySelector(".date");
        let kyivTimeElement = kyivElement.querySelector(".time");
        let kyivTime = moment().tz("Europe/Kiev");

        kyivDateElement.innerHTML = kyivTime.format("MMMM Do YYYY");
        kyivTimeElement.innerHTML = kyivTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);