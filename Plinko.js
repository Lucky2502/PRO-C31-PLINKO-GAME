class Plinkos 
{
    constructor(x,y,r)
    {
        var options =
        {
            isStatic : true
        }

        this.body = Bodies.circle(x,y,10,options);
        this.r = this.body.circleRadius;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        fill("white");
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r, this.r);
    }
}