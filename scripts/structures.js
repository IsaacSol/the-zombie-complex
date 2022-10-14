export class Structures {
    constructor(animFrames, xPos, yPos, isColidable, isBreakable, hp, classes, height, width) {
        this.animFrames = animFrames;
        this.xPos = xPos;
        this.yPos = yPos;
        this.isColidable = isColidable;
        this.isBreakable = isBreakable;
        this.hp = hp;
        this.classes = classes;
        this.height = height;
        this.width = width;
    }
}
