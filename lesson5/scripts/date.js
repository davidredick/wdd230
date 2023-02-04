
//function dateUK() {
//    let dateNow = new date();
//        document.getElementById("currentDate").innerHTML = Intl.DateTimeFormat("en-UK", {dateStyle: "full"}) .format(dateNow);

    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    document.querySelector("#year-field").innerText = currentYear;
    document.querySelector("#last-update-field").innerText = document.lastModified;
    document.querySelector("#current-date").textContent = Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);