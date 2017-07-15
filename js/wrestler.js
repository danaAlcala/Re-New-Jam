/*  Declare a Class
var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}*/

function wrestler(color){
    this.width = canvas.width / 16;
    this.height = canvas.height / 16;
    this.jumpSpeed = 1;
    this.runSpeed = 1;
    this.isGrappling = false;
    this.isJumping = false;
    this.isRunning = false;
    this.direction = 'right';
    this.xPosition;
    this.yPosition;
    this.color = color;
}