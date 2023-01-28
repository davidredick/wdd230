function lastUpdated() {
    let lastMod = document.lastModified;
    document.getElementById("lastmodified").innerHTML = lastMod;
    document.querySelector("current-date").textContent = Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);
}