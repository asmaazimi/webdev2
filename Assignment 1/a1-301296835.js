function drawTable() {
    var row = document.getElementById("row").value;
    var columns = document.getElementById("columns").value;

    var table = "<table>";
    for (var i = 1; i <= row; i++) {
        table += "<tr>";
        for (var j = 1; j <= columns; j++) {
            table += "<td>" + i * j + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("container").innerHTML = table;
}

document.getElementById("button").addEventListener("click", drawTable);

