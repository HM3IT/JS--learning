function Circle(radius,dd){
    this.radius=radius;
    this.dd=dd;
    this.draw=function(){
        console.log('draw');
    }
}
let circle1=new Function('parameter',`
this.radius=parameter;
this.draw=function(){
    console.log('draw');
}`);
const circle=new circle1(2);
const another=new Circle(1,2);
another.newProperty="hein min maw";
