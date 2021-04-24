class  mango {

    constructor(x, y, width, height){

        var options = {
            'restitution':0,
            'friction':1,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");

        World.add(world, this.body);
    }

    display () {

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ImageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }

}
