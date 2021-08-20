var name = "Adam";
console.log(name);
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
function getInputValue() {
    var inputVal = document.getElementById("myInput").value;
    for (var i = 0; i < inputVal; i++) {
        //Generate x y coords, offset by the top x,y of the leaf:
        var x = (Math.random() * 150);
        var y = (Math.random() * 100);
        var x2 = (Math.random() * 10);
        var y2 = (Math.random() * 10);
        //Translate
        ctx.fillStyle = "green";
        ctx.fillRect(x2, y2, x, y);
    }
}
