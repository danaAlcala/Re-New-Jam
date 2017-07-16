var floor;
var level;
var floor;
var areaOfLevelInUnits;
    // Type of platforms
    // 0 - Empty
    // 1 - Straight
    // 2 - Angled up from left to right
    // 3 - Angled down from left to right
    
function platform(color){
    this.width;
    this.height;
    this.xPosition;
    this.yPosition;
    this.color = color;
    this.angle
}
function clearAllPlatforms(){
    level = [
        //  0,1,2,3,4,      5,6,7,8,9        11, 13,       15
        //                                 10, 12, 14,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            ];
}
function populatePlatforms(){
    level = [
        //  0,1,2,3,4,      5,6,7,8,9        11, 13,       15
        //                                 10, 12, 14,
            0,0,0,0,0,      2,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            0,0,0,0,0,      0,0,0,0,0,      0,0,0,0,0,      0,
            ];
    populatePlatformsCalled = true;
}
function checkLevelTile(index){
    checkLevelTileCalled = true;
    switch (level[index]){
        case 1:
            // DEBUG console.log('straight');
            return "straight";
        case 2:
            // DEBUG console.log('upAngle');
            return "upAngle";
        case 3:
            // DEBUG console.log('downAngle');
            return "downAngle";
        default:
            // DEBUG console.log('empty');
            return "empty";
    }
}