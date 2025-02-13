var t = null;

function start() {
    if(t == null) {
        t = setInterval(animate, 20);
    }
}

function stop() {
    if(t != null) {
        clearInterval(t);
        t = null;
    }
}

function animate() {
    var rect = document.getElementById("rectangle");
    var x = rect.getAttribute("x");
    var newX = 2 + parseInt(x);
    if(newX > 600) {
        newX = 50;
    }
    rect.setAttribute("x", newX);
}


