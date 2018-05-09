var left;
var milk;
var dot;
var canvas;
var era;
var ar;

var count = 0;

var rand=0;

var a=650;
var b=110;

var k=0;

function setup() {
  createCanvas(1800,650);
  left = loadImage("left.png");
  milk = loadImage("milk.jpg");
  dot = loadImage("dot.png");
  canvas = loadImage("canvas.png");
  era =loadImage("era.png");
  ar = loadImage("ar.png");
}

function draw() {
  
  background(255);
  
  image(canvas,150,0,400,700);
  image(canvas,780,0,400,700);
  image(milk,220,110);
  
  
    if(count % 2 == 0){
      image(left,850,110);  
      if(count !=0)
       image(dot,a,b,25,25);
    }
    else{
      image(milk,850,110);
      image(dot,a,b,40,40);
    }
    imageMode(CENTER);
    image(era,1060,490,70+k,30+k);
    imageMode(CORNER);
    if((1025<mouseX&&mouseX<1095)&&(475<mouseY&&mouseY<505)){
     k=10; 
     if(mouseIsPressed) count =0;
    }else k=0;
    
    image(ar,550,200);
 
}

function keyPressed(){

  count ++;
  
  a= random(950,1000);
  b= random(255,305);
 
}
