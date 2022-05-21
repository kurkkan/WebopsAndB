fetch("https://retoolapi.dev/PNAOH1/data").then((response) => {
    return response.json();
}).then((data) => {
    var tDiv = document.getElementById('tablediv');
    let text = "<table border='1'>";
    for(let i of data) {
        text = text + "<tr><td>" + i["id"] + "</td><td>" + i["Company"] + "</td></tr>";
    }
    text += "</table>";

    tDiv.innerHTML = text;
}).catch((err) => {
    console.log(err);
});