class Snow
{
    constructor(x,y,width,height)
    {
        var options = {
            friction: 0.5,
            density:1
        }
       
        this.width= width;
        this.height = height;
        
        this.image = loadImage("snow5.webp");
        this.body = Bodies.rectangle(x,y,width,height,options);
    }

    display()
    {
        var SnowPos = this.body.position;
        push()
        translate(SnowPos.x,SnowPos.y);
        rectMode(CENTER);
        fill(255);
        imageMode(CENTER);
        image(this.image,SnowPos.x,SnowPos,y);
        pop();
    }
}