function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}
function moveEverything() {
    if (holdRight){
        lynxOfElDorado.xPosition+=lynxOfElDorado.runSpeed;
    }
    if (holdLeft){
        lynxOfElDorado.xPosition-=lynxOfElDorado.runSpeed;
    }
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