var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;

function change(){
    var random = Math.floor(Math.random() * 6);
    dices.innerHTML = dices[random];
}

function stopStart(){
    if(stopped) {
        stopped = false;

        t = setInterval(change, 100);
    } else {
        clearInterval(t);
        stopped = true;
    }
}


window.onload = function(){
    dices = document.getElementById('dices');
    stopStart();
}
<DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
           <div>Click on the dice.....</div>
           <div id="dice" onclick="stopstart()"></div>
           <script src="script.js"></script>
        </body>
    </html>