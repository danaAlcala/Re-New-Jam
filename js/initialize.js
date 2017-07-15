function initializeCanvas() {
    // console.log('Called initializeCanvas()');  // DEBUG

    canvas = document.getElementById('gameCanvas'); // This grabs the canvas from the HTML for use in the script.
    canvasContext = canvas.getContext('2d'); // "The getContext() method returns an object that provides methods and properties for drawing on the canvas." from w3schools.com
    canvasBGColor = 'black';

    // console.log('initializeCanvas() complete');  // DEBUG
}
function initializeFPS() {
    // console.log('Called initializeFPS()');  // DEBUG

    framesPerSecond = 30;

    // console.log('initializeFPS() complete');  // DEBUG
}
/*function initializeImages() {
    imageName.src = "./images/imageName.png";

    imageWidth = canvas.width * 0.10;
    imageHeight = canvas.height * 0.186666666666;
    imageScaleModifier = 1;
}*/
function initializePlayer() {
    lynxOfElDorado = new wrestler('white');
}

function initializeBoss() {
    bjSmirkins = new wrestler('red');
    bjSmirkins.width = 3 * widthUnitOfMeasure;
    bjSmirkins.height = 2.5 * heightUnitOfMeasure;
    bjSmirkins.xPosition = widthUnitOfMeasure;
    bjSmirkins.yPosition = heightUnitOfMeasure;
}
function initializeMiniboss1(){
    kevTardy = new wrestler('green');
}
function initializeMiniboss2(){
    bradTardy = new wrestler('blue');
}
function initializeEverything() {
    // console.log('Called initializeEverything()');  // DEBUG

    //debugCard = 0;

    initializeCanvas();
    initializeFPS();
    initInput();
    initializePlayer();
    initializeUnitsOfMeasure();
    initializePlayerPosition();
    initializeBoss();
    initializeMiniboss1();
    initializeMiniboss2();

    // console.log('initializeEverything() completed');  // DEBUG

}
function initializeUnitsOfMeasure(){
    widthUnitOfMeasure = lynxOfElDorado.width;
    heightUnitOfMeasure = lynxOfElDorado.height;
}
function initializePlayerPosition(){
    lynxOfElDorado.xPosition = widthUnitOfMeasure;
    lynxOfElDorado.yPosition = 14 * heightUnitOfMeasure;
}