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
function drawEverything() {
    drawCanvas();
    drawPlayer('white',
                lynxOfElDorado.width,
                lynxOfElDorado.height);
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
function drawPlayer(color,
                    width,
                    height){
    drawRect(color,
             lynxOfElDorado.xPosition,
             lynxOfElDorado.yPosition,
             width,
             height);
    drawPlayerCalled = true; // debug
    if (!drawCanvasCalled){
        drawPlayerCalledFirst = true;
    } // debug
}
function drawBoss(color,
                  width, 
                  height){
    drawRect(color,
             bjSmirkins.xPosition,
             bjSmirkins.yPosition,
             width,
             height);
}