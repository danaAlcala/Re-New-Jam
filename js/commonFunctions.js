function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}
function moveEverything() {
    lynxOfElDorado.xPosition = canvas.width / 16;
    lynxOfElDorado.yPosition = (canvas.width / 16) * 15;
    bjSmirkins.xPosition = canvas.width / 16;
    bjSmirkins.yPosition = canvas.height / 16;
}
//GameLoop
function updateAll() {
    moveEverything();
    drawEverything();
    debug();
}

function setFont(size, font) {
    canvasContext.font = size + "px " + font;
}