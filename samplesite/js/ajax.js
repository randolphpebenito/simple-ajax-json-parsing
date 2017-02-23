/*
    Named it ajax.js instead of main.js to easily track where the AJAX code is
*/

console.log('test log');

var displayInfo = document.getElementById("display-info"); 
var obamaBtn = document.getElementById("obamaBtn");

var click = 1;
obamaBtn.addEventListener("click", function() {
    var req = new XMLHttpRequest();
	console.log(click);
	displayInfo.style.display = 'block';
    if (isOdd(click)) {
        req.open('GET', 'http://127.0.0.1:8000/sample.json');
        req.onload = function() {
            var jsonData = JSON.parse(req.responseText);
            console.log(jsonData);
            renderHTML(jsonData);
        };
        req.send();
    } else {
        displayInfo.style.display = 'none';
    }
    click += 1;
});

function renderHTML(data) {
    var o = data.obamaFamily;
    var d = '<p>';
    for (var key in o) {
        if (key === "children") {
            d += key + ": " + o[key] + '</br>';
        } else {
            d += key + ": " + o[key].name + '</br>';
        }
    }
    d += '</p>';
    displayInfo.innerHTML = d;
}

function isOdd(num) { return num % 2; }
