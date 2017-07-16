/*function drawImage(x, y, sheetX, sheetY) {			
	canvasContext.drawImage(imageName, sheetX * IMAGE_FROM_SHEET_WIDTH, sheetY * IMAGE_FROM_SHEET_HEIGHT, IMAGE_FROM_SHEET_WIDTH, IMAGE_FROM_SHEET_HEIGHT, x, y, imageWidth * imageScaleModifier, imageHeight * imageScaleModifier);
}*/
function drawCanvas() {
    // console.log('Called drawCanvas()');  // DEBUG

    canvasContext.fillStyle = canvasBGColor; // "fillStyle Sets or returns the color, gradient, or pattern used to fill the drawing." from w3schools.com
    canvasContext.fillRect(0, 0, canvas.width, canvas.height); // Doesn't fill an existing rectangle, but instead creates a filled rectangle.
    drawCanvasCalled = true; // debug
    if (!drawPlayerCalled){
        drawCanvasCalledFirst = true;
    } // debug
    // console.log('drawCanvas() complete');  // DEBUG
}
function drawRect(color, x, y, width, height) {
    // console.log('Called drawRect()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);

    // console.log('drawRect() complete');  // DEBUG
}
function drawPlayer(){
    drawRect(lynxOfElDorado.color,
             lynxOfElDorado.xPosition,
             lynxOfElDorado.yPosition,
             lynxOfElDorado.width,
             lynxOfElDorado.height);
    drawPlayerCalled = true; // debug
    if (!drawCanvasCalled){
        drawPlayerCalledFirst = true;
    } // debug
}
function drawBoss(){
    drawRect(bjSmirkins.color,
             bjSmirkins.xPosition,
             bjSmirkins.yPosition,
             bjSmirkins.width,
             bjSmirkins.height);
    drawBossCalled = true; // debug
    if (!drawCanvasCalled){
        drawBossCalledFirst = true;
    } // debug
}
function drawEverything() {
    drawCanvas();
    drawPlayer();
    drawBoss();
    drawLevel();
}
function drawCircle(color, x, y, radius) {
    // console.log('Called drawCircle()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.beginPath();  // Starts the fill path.
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();

    // console.log('drawCircle() complete');  // DEBUG
}

function drawText(color, text, x, y) {
    canvasContext.fillStyle = color;
    canvasContext.fillText(text, x, y);
}
function drawLevel(){
    for (i = 0; i<=areaOfLevelInUnits - 1; i++){
        console.log(i);
        console.log(areaOfLevelInUnits);
        if (i == 1 || i % 17 == 0) {
            floor.xPosition = 1;
        }
        else if (i == 2 || i % 18 == 0) {
            floor.xPosition = 2;
        }
        else if (i == 3 || i % 19 == 0) {
            floor.xPosition = 3;
        }
        else if (i == 4 || i % 20 == 0) {
            floor.xPosition = 4;
        }
        else if (i == 5 || i % 21 == 0) {
            floor.xPosition = 5;
        }
        else if (i == 6 || i % 22 == 0) {
            floor.xPosition = 6;
        }
        else if (i == 7 || i % 23 == 0) {
            floor.xPosition = 7;
        }
        else if (i == 8 || i % 24 == 0) {
            floor.xPosition = 8;
        }
        else if (i == 9 || i % 25 == 0) {
            floor.xPosition = 9;
        }
        else if (i == 10 || i % 26 == 0) {
            floor.xPosition = 10;
        }
        else if (i == 11 || i % 27 == 0) {
            floor.xPosition = 11;
        }
        else if (i == 12 || i % 28 == 0) {
            floor.xPosition = 12;
        }
        else if (i == 13 || i % 29 == 0) {
            floor.xPosition = 13;
        }
        else if (i == 14 || i % 30 == 0) {
            floor.xPosition = 14;
        }
        else if (i == 15 || i % 31 == 0) {
            floor.xPosition = 15;
        }
        else {
            floor.xPosition = 0;
        }
        //Check Y Position
        if (i > 15 && i < 32) {
            floor.yPosition = 1;
        }
        else if (i > 31 && i < 48) {
            floor.yPosition = 2;
        }
        else if (i > 47 && i < 64) {
            floor.yPosition = 3;
        }
        else if (i > 63 && i < 80) {
            floor.yPosition = 4;
        }
        else if (i > 79 && i < 96) {
            floor.yPosition = 5;
        }
        else if (i > 95 && i < 112) {
            floor.yPosition = 6;
        }
        else if (i > 111 && i < 128) {
            floor.yPosition = 7;
        }
        else if (i > 127 && i < 144) {
            floor.yPosition = 8;
        }
        else if (i > 143 && i < 160) {
            floor.yPosition = 9;
        }
        else if (i > 159 && i < 176) {
            floor.yPosition = 10;
        }
        else if (i > 175 && i < 192) {
            floor.yPosition = 11;
        }
        else if (i > 191 && i < 208) {
            floor.yPosition = 12;
        }
        else if (i > 209 && i < 224) {
            floor.yPosition = 13;
        }
        else if (i > 223 && i < 240) {
            floor.yPosition = 14;
        }
        else if (i > 239) {
            floor.yPosition = 15;
        }
        else {
            floor.yPosition = 0;
        }
        switch (checkLevelTile(i)){
            case "straight":
                floor.angle = 0;
                drawStraightPlatformCalled = true;
                break;
            case "upAngle":
                floor.angle = 349;
                drawUpAnglePlatformCalled = true;
                break;
            case "downAngle":
                floor.angle = 11;
                drawDownAnglePlatformCalled = true;
                break;
            default:
                floor.angle = null;
                return;
        }
        drawLevelCalled = true;
    }
}
