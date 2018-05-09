var left;
var milk;
var dot;
var canvas;
var era;

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
}

function draw() {
  
  background(255);
  
  image(canvas,50,0,400,700);
  image(canvas,580,0,400,700);
  image(milk,120,110);
  
  
    if(count % 2 == 0){
      image(left,650,110);  
      if(count !=0)
       image(dot,a,b,25,25);
    }
    else{
      image(milk,650,110);
      image(dot,a,b,25,25);
    }
    imageMode(CENTER);
    image(era,860,490,70+k,30+k);
    imageMode(CORNER);
    if((825<mouseX&&mouseX<895)&&(475<mouseY&&mouseY<505)){
     k=10; 
     if(mouseIsPressed) count =0;
    }else k=0;
 
}

function keyPressed(){

  count ++;
  
  a= random(750,800);
  b= random(255,305);
 
}
