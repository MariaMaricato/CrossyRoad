export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture)

        this.setPosition(x,y);

        let speed = 3;
    }

    overlaps(otherObject) {
        let otherRect = otherObject.getBounds();
        let myRect = this.getBounds();

        return Phaser.Geom.Intersects.RectangleToRectangle(otherRect, myRect);
    }
}