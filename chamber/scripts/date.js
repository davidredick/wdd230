function dateUK() {
    let dateNow = new Date();
    let yearOutput = dateNow.getFullYear();
    document.getElementById("currentDate").innerHTML = Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(dateNow);
}