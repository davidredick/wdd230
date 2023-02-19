function headingbanner () {

    let day = new Date().getDay();
    let header = document.querySelector("header");
    let dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if(dayOfTheWeek[day] == "Monday" | dayOfTheWeek[day] == "Tuesday") {

        let alertBanner = document.createElement("div");
        alertBanner.innerHTML = '<span>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</span>';
        
        let deleteButton = document.createElement("button");
        
        deleteButton.innerHTML = 'X'
        alertBanner.appendChild(deleteButton);
        alertBanner.classList.add("alert");
        header.prepend(alertBanner);
        deleteButton.addEventListener("click", () => {
            alertBanner.remove();    
        });


    }
}
