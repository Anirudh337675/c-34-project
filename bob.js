class Bob
{
    constructor(x,y,radius)
    {
      
        this.radius=radius
        this.body=  Matter.Bodies.circle(x,y,radius)
        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
     
      
        ellipseMode(CENTER);
        stroke("yellow")
        fill("black");
        ellipse(roc.x,roc.y,this.radius*2,this.radius*2);
        
    }

}