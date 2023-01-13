function year() {
    let dateNew = new Date();
    let yearOutput = dateNew.getFullYear();
    document.getElementById("currentyear").innerHTML = yearOutput;
}