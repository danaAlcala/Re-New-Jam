var drawPlayerCalled = false;
var drawCanvasCalled = false;
var drawBossCalled = false;
var drawPlayerCalledFirst = false;
var drawCanvasCalledFirst = false;
var drawBossCalledFirst = false;
var drawStraightPlatformCalled = false;
var drawUpAnglePlatformCalled = false;
var drawDownAnglePlatformCalled = false;
var populatePlatformsCalled = false;
var checkLevelTileCalled = false;
var drawLevelCalled = false;

function debug(){
    
    // Player Debug
    //console.log("Lynx's X: " + lynxOfElDorado.xPosition);
    //console.log("Lynx's Y: " + lynxOfElDorado.yPosition);
    //console.log("Lynx's height: " + lynxOfElDorado.height);
    //console.log("Lynx's width: " + lynxOfElDorado.width);
    //console.log("Lynx's position: (" + lynxOfElDorado.xPosition + "," + lynxOfElDorado.yPosition + ")");
    //console.log("drawRect("+lynxOfElDorado.color+", "+lynxOfElDorado.xPosition+", "+lynxOfElDorado.yPosition+", "+lynxOfElDorado.width+", "+lynxOfElDorado.height+");");

    // Draw Debug
    //console.log('drawCanvasCalled:' + drawCanvasCalled);
    //console.log('drawPlayerCalled:' + drawPlayerCalled);
    //console.log('drawBossCalled:' + drawBossCalled)
    //console.log('drawCanvasCalledFirst:' + drawCanvasCalledFirst);
    //console.log('drawPlayerCalledFirst:' + drawPlayerCalledFirst);
    //console.log('drawBossCalledFirst:' + drawBossCalledFirst);
    //console.log('drawStraightPlatformCalled: ' + drawStraightPlatformCalled);
    //console.log('drawUpAnglePlatformCalled: '+ drawUpAnglePlatformCalled);
    //console.log('drawDownAnglePlatformCalled: '+ drawDownAnglePlatformCalled);

    // Boss Debug
    //console.log("BJ's height: " + bjSmirkins.height);
    //console.log("BJ's width: " + bjSmirkins.width);
    //console.log("drawRect("+bjSmirkins.color+", "+bjSmirkins.xPosition+", "+bjSmirkins.yPosition+", "+bjSmirkins.width+", "+bjSmirkins.height+");");

    // Miniboss 1 Debug
    //console.log("Kev's height: " + kevTardy.height);
    //console.log("Kev's width: " + kevTardy.width);

    // Miniboss 2 Debug
    //console.log("Brad's height: " + bradTardy.height);
    //console.log("Brad's width: " + bradTardy.width);

    // Units of Measure Debug
    //console.log("Width Unit of Measure: " + widthUnitOfMeasure);
    //console.log("Height Unit of Measure: " + heightUnitOfMeasure);

    // Platforms / Level Debug
    //console.log("populatePlatformsCalled: " + populatePlatformsCalled);
    //console.log("(0,0): "+ level[0]);
    //console.log("checkLevelTileCalled: " + checkLevelTileCalled);
    //console.log("drawLevelCalled: " + drawLevelCalled);
    console.log("Floor Angle: " + floor.angle);

    
    
    
}
