let buttonOpen = document.getElementById("burger-open");
let buttonClose = document.getElementById("burger-close")
function toggleMenu() {
    console.log("Click-eth-ed");
    document.getElementById("burger-nav").classList.toggle("hidden");
    
    if(document.getElementById("burger-nav").classList.contains("hidden")) {
        buttonOpen.classList.remove("hidden");
        buttonClose.classList.add("hidden"); }
    else {
        buttonOpen.classList.add("hidden");
        buttonClose.classList.remove("hidden");  }
}

document.getElementById("burger-open").onclick = toggleMenu;
document.getElementById("burger-close").onclick = toggleMenu;